package org.bk.dieter.user;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Created by SG0224958 on 07.10.16.
 */
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CustomerService {

    private final
    @NonNull
    CustomerRepository customerRepository;


    public Optional<Customer> findByFirstName(String firstName) {
        return customerRepository.findByFirstName(firstName);
    }
}
