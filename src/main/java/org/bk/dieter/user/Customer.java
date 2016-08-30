package org.bk.dieter.user;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.bk.dieter.product.Product;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

/**
 * Created by redi on 16.05.2016.
 */
@Entity
@Getter
@Setter
@ToString
public class Customer {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String password;
//    @ManyToMany
//    List<Product> productList;
}

