package com.chiloane.cript.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BuyBitcoinDto {
    private String receiverAddress;

     private String privateKey;
    private int satoshiToBuy;
}
