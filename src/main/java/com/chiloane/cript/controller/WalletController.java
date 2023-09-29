package com.chiloane.cript.controller;

import com.chiloane.cript.dto.*;
import com.chiloane.cript.model.BTCZARHistoricalData;
import com.chiloane.cript.model.Transaction;
import com.chiloane.cript.service.impl.BitcoinWalletServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/wallet")
@RequiredArgsConstructor
public class WalletController {

    private final BitcoinWalletServiceImpl bitcoinWalletService;

    @GetMapping
    public String getWallet() {
        return "Hello";
    }

    @GetMapping("/chart")
    public BTCZARHistoricalData getChart() {
        return bitcoinWalletService.getHistoricalData();
    }

    @GetMapping("/balance")
    public FeignWalletDto getBalance(@RequestParam String email) {
        return bitcoinWalletService.getWalletBalance(email);
    }


    @PostMapping("/buy")
    public void buyBitcoin(@RequestBody BuyBitcoinDto buyBitcoinDto) {
         bitcoinWalletService.buyBitcoin(buyBitcoinDto.getReceiverAddress(), buyBitcoinDto.getSatoshiToBuy());
    }
    @PostMapping ("/transfer")
            void transferBitcoin(@RequestBody SendBitcoinDto sendBitcoinDto) {
        bitcoinWalletService.sendBitcoin(sendBitcoinDto.getSenderAddress(), sendBitcoinDto.getReceiverAddress(), sendBitcoinDto.getSatoshiToSend());
    }

    @GetMapping("/transactions")
    public List<Transaction> getTransactions(@RequestParam String email) {
        return bitcoinWalletService.getWalletTransactions(email);
    }



}
