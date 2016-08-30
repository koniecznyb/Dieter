package org.bk.dieter.product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;
import java.util.Optional;

/**
 * Created by redi on 03.04.2016.
 */
public interface ProductRepository extends CrudRepository<Product, Long>{

    Optional<Product> findByName(String name);
    Optional<Product> findById(int productId);
    List<Product> findAll();

}
