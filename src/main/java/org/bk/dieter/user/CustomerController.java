package org.bk.dieter.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

/**
 * Created by redi on 17.05.2016.
 */
@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @RequestMapping(value = "/user/{firstName}", method = RequestMethod.GET)
    public Customer getUser(@PathVariable String firstName) {
        Optional<Customer> user = customerRepository.findByFirstName(firstName);
        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }
}
