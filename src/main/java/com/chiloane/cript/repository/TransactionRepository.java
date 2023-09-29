package com.chiloane.cript.repository;

import com.chiloane.cript.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    Transaction findBySender(String sender);
    Transaction findByReceiver(String receiver);
    @Query(value = "SELECT * FROM Transaction t WHERE t.sender = :address OR t.receiver = :address", nativeQuery = true)
    List<Transaction> findByAddress(String address);
}