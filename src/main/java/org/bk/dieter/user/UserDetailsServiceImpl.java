package org.bk.dieter.user;

import org.bk.dieter.role.Role;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

/**
 * Created by redi on 07.09.16.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        LOG.info("Looking for username [{}]", username);
        Optional<Customer> customerOptional = customerRepository.findByFirstName(username);
        LOG.info("Found user [{}]", customerOptional);
        if (!customerOptional.isPresent()) {
            throw new UsernameNotFoundException("Not found " + username);
        }
        Customer customer = customerOptional.get();

        String password = customer.getPassword();
        Set<Role> roles = customer.getRoles();

        LOG.info("Loading user [{}], with password [{}], with roles [{}]", username, password, roles);

        return new User(username, password, roles);
    }
}
