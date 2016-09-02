package org.bk.dieter.user;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.bk.dieter.product.Product;
import org.bk.dieter.role.Role;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by redi on 16.05.2016.
 */
@Entity
@Getter
@Setter
@ToString
@Table(name = "customers")
public class Customer {

    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customer_id_gen")
    @SequenceGenerator(name = "customer_id_gen", sequenceName = "seq_customer_id", allocationSize = 1, initialValue = 1)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "creation_date", nullable = false)
    private LocalDateTime creationDate;

    @Column(name = "last_modification_date", nullable = false)
    private LocalDateTime lastModificationDate;

    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(joinColumns = {@JoinColumn(name = "customer_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "role_id", nullable = false)})
    private Set<Role> roles = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(joinColumns = {@JoinColumn(name = "customer_id", nullable = false)},
            inverseJoinColumns ={@JoinColumn(name = "product_id", nullable = false)})
    private Set<Product> products = new HashSet<>();

    @PrePersist
    protected void onPrePersist() {
        creationDate = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
    }

    @PreUpdate
    protected void onPreUpdate() {
        lastModificationDate = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
    }

    //    TODO passwords
    private String password;

}

