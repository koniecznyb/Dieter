package org.bk.dieter.configuration.development;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

/**
 * Created by redi on 14.05.2016.
 */
@Configuration
@Profile("development")
public class DevelopmentConfiguration {

    private final String URL = "jdbc:postgresql://localhost:5432/dieter_database";
    private final String USER = "dieter_user";
    private final String PASSWORD = "q1w2e3r4";

    @Bean
    public DataSource getDataSource() {
        return new DriverManagerDataSource(URL, USER, PASSWORD);
    }
}
