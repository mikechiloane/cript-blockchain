package com.chiloane.cript.exception;

import feign.Response;
import feign.codec.ErrorDecoder;
import org.springframework.http.HttpStatus;

public class FeignErrorDecoder implements ErrorDecoder {

    @Override
    public Exception decode(String methodKey, Response response) {
        String requestUrl = response.request().url();
        Response.Body responseBody = response.body();
        HttpStatus responseStatus = HttpStatus.valueOf(response.status());

        if (responseStatus.is5xxServerError()) {
            return new WalletBalanceException("Reached the limit of requests to the wallet service");
        } else if (responseStatus.is4xxClientError()) {
            return new DustWalletException("Wallet has insufficient satoshi for this transaction");
        } else {
            return new Exception("Generic exception");
        }
    }
}