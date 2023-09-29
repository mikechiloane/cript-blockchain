package com.chiloane.cript.service;

import com.chiloane.cript.model.BTCZARHistoricalData;
import com.chiloane.cript.dto.FeignWalletDto;
import com.chiloane.cript.model.Transaction;

import java.util.List;

public interface BitcoinWalletService {

    public void createWallet(String email);
    public String getWallet(String walletName);
    public FeignWalletDto getWalletBalance(String walletName);
    public void buyBitcoin(String walletName, int amount);
    public void sendBitcoin(String senderAddress, String receiverAddress, int amount);
    public BTCZARHistoricalData getHistoricalData();
    public List<Transaction> getWalletTransactions(String walletName);


}
