package com.chiloane.cript.model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeignWalletBalance {

        private double balance;
        private double sent;
        private double received;
        private String address;

}
