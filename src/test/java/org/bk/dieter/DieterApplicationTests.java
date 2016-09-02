package org.bk.dieter;

import org.bk.dieter.journal.Journal;
import org.bk.dieter.journal.JournalRepository;
import org.bk.dieter.product.Product;
import org.bk.dieter.product.ProductRepository;
import org.bk.dieter.user.Customer;
import org.bk.dieter.user.CustomerRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Collections;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = DieterApplication.class)
@WebAppConfiguration
public class DieterApplicationTests {

    @Autowired
    JournalRepository journalRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ProductRepository productRepository;

    @Test
    @WithMockUser(authorities = {"ROLE_USER", "ROLE_ADMIN"})
    public void shouldCreateCustomer() throws Exception {
//        given
        LocalDateTime currentTimeInUtc = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();

        Customer customer = new Customer();
        customer.setFirstName("Bart");
        customer.setLastName("Januszowski");

//        when
        customerRepository.save(customer);

//        then
        Optional<Customer> result = customerRepository.findByFirstName("Bart");
        assertThat(result.isPresent()).isTrue();
        assertThat(result.get().getCreationDate()).isEqualTo(currentTimeInUtc);
    }

    @Test
    @WithMockUser(authorities = {"ROLE_USER"})
    @Transactional
    public void shouldCreateNewJournal() throws Exception {
//        given
        LocalDateTime currentTimeInUtc = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
        Journal journal = new Journal();
        journal.setCustomer(null);
        journal.setProducts(Collections.emptySet());

//        when
        journalRepository.save(journal);

//        then
        Optional<Journal> result = journalRepository.findById(journal.getId());
        assertThat(result.isPresent()).isTrue();
        assertThat(result.get().getCreationDate()).isEqualTo(currentTimeInUtc);
        assertThat(result.get().getCustomer()).isEqualTo(null);
        assertThat(result.get().getProducts()).isEqualTo(Collections.emptySet());
    }

    @Test
    @WithMockUser(authorities = {"ROLE_USER"})
    public void shouldCreateNewProduct() throws Exception {
//        given
        LocalDateTime currentTimeInUtc = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
        Product product = new Product();
        product.setName("KURA");
        product.setCalories(10);
        product.setCarbohydrates(100);
        product.setFats(12);
        product.setProteins(13);

//        when
        productRepository.save(product);

//        then
        Optional<Product> result = productRepository.findById(product.getId());
        assertThat(result.isPresent()).isTrue();
        assertThat(result.get().getCalories()).isEqualTo(10);
        assertThat(result.get().getCarbohydrates()).isEqualTo(100);
        assertThat(result.get().getFats()).isEqualTo(12);
        assertThat(result.get().getProteins()).isEqualTo(13);
        assertThat(result.get().getName()).isEqualTo("KURA");
        assertThat(result.get().getCreationDate()).isEqualTo(currentTimeInUtc);
    }

    @Test
    @Transactional
    @WithMockUser(authorities = {"ROLE_USER", "ROLE_ADMIN"})
    public void shouldAddJournalToACustomer() throws Exception {
//        given
        LocalDateTime currentTimeInUtc = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
        Customer customer = new Customer();
        customer.setFirstName("Bart");
        customer.setLastName("Json");

        customerRepository.save(customer);

        Journal journal = new Journal();
        journal.setCustomer(customer);
        journal.setProducts(Collections.emptySet());

//        when
        customerRepository.save(customer);
        journalRepository.save(journal);

//        then
        Optional<Journal> result = journalRepository.findById(journal.getId());
        assertThat(result.isPresent()).isTrue();
        assertThat(result.get().getProducts()).isEqualTo(Collections.emptySet());
        assertThat(result.get().getCreationDate()).isEqualTo(currentTimeInUtc);
        assertThat(result.get().getCustomer()).isEqualTo(customer);
    }

    @Test
    public void shouldAddExistingProductToTheJournal() throws Exception {

    }

    @Test
    public void shouldCreateNewProductIfDoesntExistWhenAddingToTheJournal() throws Exception {

    }
}
