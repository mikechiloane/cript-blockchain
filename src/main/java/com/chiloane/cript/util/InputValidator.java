package com.chiloane.cript.util;

import com.chiloane.cript.exception.BitcoinAddressException;

public class InputValidator {
    public static boolean isNotSameAddress(String senderAddress, String receiverAddress) {
    if(senderAddress.equals(receiverAddress)){
        throw new BitcoinAddressException("Sender and receiver addresses are the same");
    }
    return true;
    }

    public static boolean isValidTestnetAddress(String address) {
        return address.startsWith("m") || address.startsWith("n") || address.startsWith("2");
    }


}
