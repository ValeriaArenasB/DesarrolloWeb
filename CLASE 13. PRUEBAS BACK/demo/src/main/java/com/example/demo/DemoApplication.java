package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;

import com.example.demo.model.User;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public User user() {
		return new User("Tatis", "sushi", "tatis@gmail.com", 20);
	}

	@Bean
	public User user2() {
		return new User("Juanpa", "baplo", "jpcanon@gmail.com", 20);
	}
}
