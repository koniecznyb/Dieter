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

    @RequestMapping(value = "/user/{name}", method = RequestMethod.GET)
    public Customer getUser(@PathVariable String name) {
        Optional<Customer> user = customerRepository.findByName(name);
        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }
}
