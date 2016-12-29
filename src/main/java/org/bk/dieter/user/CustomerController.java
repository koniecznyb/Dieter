package org.bk.dieter.user;

import lombok.NonNull;
import org.bk.dieter.journal.Journal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.sql.SQLException;
import java.util.Optional;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * Created by redi on 17.05.2016.
 */
@RestController
public class CustomerController {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @NonNull
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @RequestMapping("/user")
    public Principal checkCustomer(Principal user) {
        return user;
    }

    @Secured("ROLE_USER")
    @RequestMapping(value = "/user/{firstName}", method = RequestMethod.GET)
    public ResponseEntity<Customer> getUser(@PathVariable String firstName) {
        Optional<Customer> customerOptional = customerRepository.findByFirstName(firstName);
        if (!customerOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Customer customer = customerOptional.get();

        if (!firstName.equals(UserUtils.getCurrentUserName())) {
            throw new AccessDeniedException("Insufficient permissions");
        }

        customer.add(linkTo(Customer.class).slash("user/" + customer.getFirstName()).withSelfRel());
        customer.add(linkTo(Journal.class).slash("user/" + customer.getFirstName() + "/journals").withRel("journals"));
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @ExceptionHandler({SQLException.class, DataAccessException.class})
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Data access error")
    public void databaseError() {
    }

    @Secured("ROLE_ADMIN")
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
}
