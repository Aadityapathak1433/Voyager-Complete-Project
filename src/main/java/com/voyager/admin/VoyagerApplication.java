package com.voyager.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class VoyagerApplication {

	public static void main( String[] args) {
		SpringApplication.run(VoyagerApplication.class, args);
	}

}