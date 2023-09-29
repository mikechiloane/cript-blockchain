package com.chiloane.cript.service.impl;

import com.chiloane.cript.dto.*;
import com.chiloane.cript.exception.NotFoundException;
import com.chiloane.cript.exception.WalletBalanceException;
import com.chiloane.cript.feign.NodeClient;
import com.chiloane.cript.feign.TwelveAPI;
import com.chiloane.cript.model.BTCZARHistoricalData;
import com.chiloane.cript.model.BitcoinWallet;
import com.chiloane.cript.model.Transaction;
import com.chiloane.cript.model.User;
import com.chiloane.cript.repository.BitcoinWalletRepository;
import com.chiloane.cript.repository.TransactionRepository;
import com.chiloane.cript.repository.UserRepository;
import com.chiloane.cript.service.BitcoinWalletService;
import com.chiloane.cript.util.InputValidator;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.w3c.dom.Node;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor

public class BitcoinWalletServiceImpl implements BitcoinWalletService {

    private static Logger logger = org.slf4j.LoggerFactory.getLogger(BitcoinWalletServiceImpl.class);
    private final BitcoinWalletRepository bitcoinWalletRepository;
    private final UserRepository userRepository;
    private final TwelveAPI twelveAPI;
    private final TransactionRepository transactionRepository;
    private final NodeClient nodeClient;



    @Value("${app.name}")
    private String appName;

    @Override
    public void createWallet(String email) {

        User existingUser = userRepository.findByEmail(email);
        if (existingUser == null) {
            throw new NotFoundException("User not found:" + email);
        }
        NodeWalletDto nodeWalletDto = nodeClient.createWallet();
        BitcoinWallet bitcoinWallet = BitcoinWallet.builder()
                .balance(BigDecimal.ZERO)
                .address(nodeWalletDto.getAddress())
                .privateKey(nodeWalletDto.getPrivateKey())
                .user(existingUser)
                .build();

        bitcoinWalletRepository.save(bitcoinWallet);


    }

    @Override
    public String getWallet(String walletName) {
        return null;
    }

    @Override
    public FeignWalletDto getWalletBalance(String email) {

        try {
            User existingUser = userRepository.findByEmail(email);
            BitcoinWallet bitcoinWallet = bitcoinWalletRepository.findByUserEmail(email);
            if (existingUser == null) {
                throw new NotFoundException("User not found:" + email);
            }
            if (bitcoinWallet == null) {
                throw new NotFoundException("Wallet not found:" + email);
            }
            FeignWalletDto feignWalletDto = nodeClient.getBalance(bitcoinWallet.getAddress());

            logger.info("Wallet balance retrieved");
            bitcoinWallet.setBalance(BigDecimal.valueOf(feignWalletDto.getBalance()));
            bitcoinWalletRepository.save(bitcoinWallet);
            logger.info("Wallet balance updated");
            return feignWalletDto;
        } catch (WalletBalanceException e) {
            BitcoinWallet bitcoinWallet = bitcoinWalletRepository.findByUserEmail(email);
            FeignWalletDto feignWalletDto = new FeignWalletDto();
            feignWalletDto.setBalance(bitcoinWallet.getBalance().doubleValue());
            feignWalletDto.setAddress(bitcoinWallet.getAddress());
            return feignWalletDto;
        }
    }


    @Override
    public void buyBitcoin(String address, int amount) {
        logger.info("Buying bitcoin:" + address);
        BitcoinWallet wallet = bitcoinWalletRepository.findByAddress(address);
        if (wallet == null) {
            throw new NotFoundException("Wallet not found");
        }

        BuyBitcoinDto payload = new BuyBitcoinDto();
        payload.setReceiverAddress(address);
        payload.setSatoshiToBuy(amount);

        HashDto hashDto = nodeClient.buyBitcoin(payload);

        if (hashDto.getHash() == null) {
            throw new NotFoundException("Hash not found");
        }

        Transaction transaction = Transaction.builder()
                .satoshi(amount)
                .sender(appName)
                .receiver(address)
                .hash(hashDto.getHash())
                .build();
        transactionRepository.save(transaction);

    }

    @Override
    public void sendBitcoin(String senderAddress, String receiverAddress, int amount) {
        InputValidator.isNotSameAddress(senderAddress, receiverAddress);
        BitcoinWallet wallet = bitcoinWalletRepository.findByAddress(senderAddress);
        if (wallet == null) {
            throw new NotFoundException("Wallet not found");
        }

        SendBitcoinDto sendBitcoinDto = new SendBitcoinDto();

        sendBitcoinDto.setSenderAddress(senderAddress);
        sendBitcoinDto.setReceiverAddress(receiverAddress);
        sendBitcoinDto.setPrivateKey(wallet.getPrivateKey());
        sendBitcoinDto.setSatoshiToSend(amount);


        HashDto hashDto = nodeClient.sendBitcoin(sendBitcoinDto);
        Transaction transaction = Transaction.builder()
                .satoshi(amount)
                .sender(senderAddress)
                .receiver(receiverAddress)
                .hash(hashDto.getHash())
                .build();

        transactionRepository.save(transaction);
        logger.info("Bitcoin sent successfully");

    }

    @Override
    public List<Transaction> getWalletTransactions(String email) {
        BitcoinWallet wallet = bitcoinWalletRepository.findByUserEmail(email);
        if (wallet == null) {
            throw new NotFoundException("Wallet not found:" + email);
        }
        logger.info("Retrieving wallet transactions:" + wallet.getAddress() + " for user:" + email);
        return transactionRepository.findByAddress(wallet.getAddress());

    }

    @Override
    public BTCZARHistoricalData getHistoricalData() {
        return twelveAPI.getBTCZARHistoricalData();
    }
}
