package com.chiloane.cript.dto;

import lombok.Value;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * DTO for {@link com.chiloane.cript.model.Transaction}
 */
@Value
public class TransactionDto implements Serializable {
    String sender;
    String receiver;
    String hash;
    double satoshi;
    LocalDate date;
}