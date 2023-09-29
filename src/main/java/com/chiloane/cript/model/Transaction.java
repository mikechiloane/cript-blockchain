package com.chiloane.cript.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@Table(name = "transaction")
@Builder
@NoArgsConstructor
public class Transaction {

    @Id
    @GeneratedValue()
    private Long id;
    private String sender;
    private String receiver;
    private String hash;
    private double satoshi;
    private LocalDate date;
    @PrePersist
    public void prePersist() {
        this.date = LocalDate.now();
    }

}