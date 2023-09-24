package com.chiloane.cript.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class WalletConsistencyExcepton extends  RuntimeException{

        public WalletConsistencyExcepton(String message) {
            super(message);
        }


}
