package org.bk.dieter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.integration.IntegrationAutoConfiguration;

import java.util.Arrays;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.stream.Collectors;

@SpringBootApplication
public class DieterApplication {

    public static void main(String[] args) {
        SpringApplication.run(DieterApplication.class, args);
    }
}
