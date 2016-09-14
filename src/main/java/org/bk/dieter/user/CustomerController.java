package org.bk.dieter.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Optional;

/**
 * Created by redi on 17.05.2016.
 */
@RestController
public class CustomerController {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @Autowired
    CustomerRepository customerRepository;

    @Secured("ROLE_USER")
    @RequestMapping(value = "/user/{firstName}", method = RequestMethod.GET)
    public Customer getUser(@PathVariable String firstName) {
        Optional<Customer> user = customerRepository.findByFirstName(firstName);
        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }

    @ExceptionHandler({SQLException.class,DataAccessException.class})
    @ResponseStatus(value= HttpStatus.INTERNAL_SERVER_ERROR, reason="Data access error")
    public void databaseError() {
    }

    @Secured("ROLE_ADMIN")
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public Customer saveCustomer(Customer customer){
        return customerRepository.save(customer);
    }
}
