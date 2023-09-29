package com.chiloane.cript.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class BTCZARHistoricalData {

    private Meta meta;
    private List<Values> values;


    @Setter
    @Getter
    public static class Meta {
        private String symbol;
        private String interval;
        private String currency_base;
        private String currency_quote;
        private String exchange;
        private String type;

    }

    @Setter
    @Getter
    public static class Values {
        private String datetime;
        private String open;
        private String high;
        private String low;
        private String close;

    }

}


