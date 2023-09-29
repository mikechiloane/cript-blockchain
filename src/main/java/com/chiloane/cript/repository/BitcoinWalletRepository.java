package com.chiloane.cript.repository;

import com.chiloane.cript.model.BitcoinWallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BitcoinWalletRepository extends JpaRepository<BitcoinWallet,Long> {

    BitcoinWallet findByUserEmail(String email);
    BitcoinWallet findByAddress(String address);

}
