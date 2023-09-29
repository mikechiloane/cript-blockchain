package com.chiloane.cript.feign;


import com.chiloane.cript.model.BTCZARHistoricalData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "twelve-api", url = "https://api.twelvedata.com/time_series?apikey=e5a693f83b384312a2d3023c9b345808&interval=1week&symbol=BTC/ZAR&outputsize=100")
public interface TwelveAPI {
    @GetMapping
    BTCZARHistoricalData getBTCZARHistoricalData();

}
