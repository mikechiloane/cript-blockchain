package com.chiloane.cript.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "Dust wallet", value = org.springframework.http.HttpStatus.BAD_REQUEST)
public class DustWalletException extends  RuntimeException{

    public DustWalletException(String message) {
        super(message);
    }

}
