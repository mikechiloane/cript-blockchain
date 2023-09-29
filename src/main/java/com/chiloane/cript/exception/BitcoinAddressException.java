package com.chiloane.cript.exception;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(reason = "Bitcoin address is invalid", value = org.springframework.http.HttpStatus.BAD_REQUEST)
public class BitcoinAddressException extends  RuntimeException{
    public BitcoinAddressException(String message) {
        super(message);
    }
}
