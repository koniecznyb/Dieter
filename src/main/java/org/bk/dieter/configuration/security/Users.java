package org.bk.dieter.configuration.security;

import org.bk.dieter.user.Customer;
import org.bk.dieter.user.CustomerRepository;
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
public class Users implements UserDetailsService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<Customer> customer = customerRepository.findByFirstName(username);
        if(!customer.isPresent()){
            return null;
        }

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
