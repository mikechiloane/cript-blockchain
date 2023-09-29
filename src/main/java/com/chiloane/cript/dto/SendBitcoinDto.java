package com.chiloane.cript.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestBody;


@Getter
@Setter
public class SendBitcoinDto {

    private String senderAddress;
    private String receiverAddress;
    private String privateKey;
    private Integer satoshiToSend;

}
