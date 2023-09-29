package com.chiloane.cript.feign;


import com.chiloane.cript.dto.*;
import feign.Headers;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "node-client", url = "http://localhost:8080")
public interface NodeClient {
    @GetMapping("/api/v1/wallet")
    NodeWalletDto createWallet();

    @PostMapping("/api/v1/wallet/sell")
    @Headers("Content-Type: application/json")
    HashDto buyBitcoin(BuyBitcoinDto buyBitcoinDto);

    @PostMapping("/api/v1/wallet/send")
    @Headers("Content-Type: application/json")
    HashDto sendBitcoin(SendBitcoinDto sendBitcoinDto);

    @GetMapping("/api/v1/wallet/balance/{address}")
    FeignWalletDto getBalance(@PathVariable String address);


}
