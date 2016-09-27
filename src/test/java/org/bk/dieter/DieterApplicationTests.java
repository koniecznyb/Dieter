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
import java.util.HashSet;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

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
        assertThat(result.get().getCreationDate()).isAfterOrEqualTo(currentTimeInUtc);
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
        Optional<Product> result = productRepository.findByProductId(product.getProductId());
        assertThat(result.isPresent()).isTrue();
        assertThat(result.get().getCalories()).isEqualTo(10);
        assertThat(result.get().getCarbohydrates()).isEqualTo(100);
        assertThat(result.get().getFats()).isEqualTo(12);
        assertThat(result.get().getProteins()).isEqualTo(13);
        assertThat(result.get().getName()).isEqualTo("KURA");
        assertThat(result.get().getCreationDate()).isAfterOrEqualTo(currentTimeInUtc);
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
        journalRepository.save(journal);

//        then
        Optional<Journal> result = journalRepository.findByJournalId(journal.getJournalId());
        assertThat(result.isPresent()).isTrue();
        assertThat(result.get().getProducts()).isEqualTo(Collections.emptySet());
        assertThat(result.get().getCreationDate()).isAfterOrEqualTo(currentTimeInUtc);
        assertThat(result.get().getCustomer()).isEqualTo(customer);
    }

    @Test
    @Transactional
    @WithMockUser(authorities = {"ROLE_USER", "ROLE_ADMIN"})
    public void shouldAddExistingProductToTheJournal() throws Exception {
        //        given
        LocalDateTime currentTimeInUtc = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
        Customer customer = new Customer();
        customer.setFirstName("Json");
        customer.setLastName("Derulo");

        Journal journal = new Journal();
        journal.setCustomer(customer);

        Product product = new Product();
        product.setName("KURA");
        product.setCalories(10);
        product.setCarbohydrates(100);
        product.setFats(12);
        product.setProteins(13);

        journal.setProducts(new HashSet<>(Collections.singletonList(product)));

        customer.setJournals(new HashSet<>(Collections.singletonList(journal)));

//        when
        customerRepository.save(customer);

//        then
        Optional<Journal> journalResult = journalRepository.findByJournalId(journal.getJournalId());
        Optional<Product> productResult = productRepository.findByProductId(product.getProductId());
        assertThat(journalResult.isPresent()).isTrue();
        assertThat(productResult.isPresent()).isTrue();
        assertThat(journalResult.get().getProducts().contains(product)).isTrue();
        assertThat(journalResult.get().getCreationDate()).isAfterOrEqualTo(currentTimeInUtc);
        assertThat(journalResult.get().getCustomer()).isEqualTo(customer);
        assertThat(productResult.get().getCalories()).isEqualTo(10);
        assertThat(productResult.get().getCarbohydrates()).isEqualTo(100);
        assertThat(productResult.get().getFats()).isEqualTo(12);
        assertThat(productResult.get().getProteins()).isEqualTo(13);
        assertThat(productResult.get().getName()).isEqualTo("KURA");
    }
}
