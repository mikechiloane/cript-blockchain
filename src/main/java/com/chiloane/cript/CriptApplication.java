package com.chiloane.cript;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class CriptApplication {

	public static void main(String[] args) {
		SpringApplication.run(CriptApplication.class, args);
	}
}
