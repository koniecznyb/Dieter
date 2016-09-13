package org.bk.dieter.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        Optional<Customer> customer = customerRepository.findByFirstName(username);
        LOG.info("Found user [{}]", customer);
        if (!customer.isPresent()) {
            return null;
        }

        LOG.info("Loading user [{}]", username);

        List<GrantedAuthority> auth = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_USER");

        if (username.equals("admin")) {
            auth = AuthorityUtils
                    .commaSeparatedStringToAuthorityList("ROLE_ADMIN");
        }
        String password = customer.get().getPassword();

        return new User(username, password,
                auth);
    }
}
