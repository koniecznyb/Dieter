package org.bk.dieter.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class DevelopmentSecurityConfig extends WebSecurityConfigurerAdapter {

    private final String URL = "jdbc:postgresql://localhost:5432/dieter";
    private final String USER = "dieter";
    private final String PASSWORD = "q1w2e3r4";


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().anyRequest().permitAll();
    }

    @Bean
    public DataSource getDataSource() {
        return new DriverManagerDataSource(URL, USER, PASSWORD);
    }

}
