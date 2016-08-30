package org.bk.dieter.journal;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.bk.dieter.product.Product;
import org.bk.dieter.user.Customer;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

/**
 * Created by redi on 2016-08-07.
 */
@Entity
@Getter
@Setter
@ToString
public class Journal {

    @Id
    @GeneratedValue
    private int id;
    @OneToMany
    private Set<Product> productList;
    @ManyToOne
    private Customer customer;
    private LocalDateTime createdAt;

}
