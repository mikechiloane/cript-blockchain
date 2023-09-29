package com.chiloane.cript.dto;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class FeignWalletDto {

        private double balance;
        private double sent;
        private double received;
        private String address;

}
