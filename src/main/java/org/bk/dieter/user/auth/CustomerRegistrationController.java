package org.bk.dieter.user.auth;

import com.google.common.collect.Sets;
import lombok.NonNull;
import org.bk.dieter.role.Role;
import org.bk.dieter.role.RoleRepository;
import org.bk.dieter.user.Customer;
import org.bk.dieter.user.CustomerRepository;
import org.bk.dieter.user.auth.CustomerSignupDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by SG0224958 on 29.12.16.
 */
@RestController
public class CustomerRegistrationController {

    @NonNull
    private final CustomerRepository customerRepository;

    @NonNull
    private final RoleRepository roleRepository;

    @NonNull
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public CustomerRegistrationController(CustomerRepository customerRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<Customer> createNewAccount(@RequestBody CustomerSignupDTO customerSignupDTO) {
        Role roleUser = roleRepository.findOne(1L);

        Customer customer = new Customer();
        customer.setRoles(Sets.newHashSet(roleUser));
        customer.setFirstName(customerSignupDTO.getFirstName());
        customer.setLastName("empty");

        String encodedPassword = passwordEncoder.encode(customerSignupDTO.getPassword());
        customer.setPassword(encodedPassword);

        customerRepository.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

}
