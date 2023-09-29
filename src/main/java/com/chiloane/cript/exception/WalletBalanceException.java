package com.chiloane.cript.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class WalletBalanceException extends RuntimeException {

    public WalletBalanceException(String message) {
        super(message);
    }

}
