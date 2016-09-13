package org.bk.dieter.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Created by redi on 17.05.2016.
 */
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    Optional<Customer> findByFirstName(String firstName);

    @Override
    Customer save(Customer customer);

    @Override
    void delete(Long id);

}
