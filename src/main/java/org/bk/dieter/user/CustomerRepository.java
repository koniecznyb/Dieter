package org.bk.dieter.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.method.P;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Created by redi on 17.05.2016.
 */
@Repository
@PreAuthorize("hasRole('ROLE_USER')")
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    Optional<Customer> findByName(String name);

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    Customer save(Customer customer);

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void delete(Long id);

}
