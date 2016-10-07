package org.bk.dieter.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.bk.dieter.journal.Journal;
import org.bk.dieter.role.Role;
import org.springframework.hateoas.ResourceSupport;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by redi on 16.05.2016.
 */
@Entity
@Getter
@Table(name = "customer")
public class Customer extends ResourceSupport{

    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customer_id_gen")
    @SequenceGenerator(name = "customer_id_gen", sequenceName = "seq_customer_id", allocationSize = 1, initialValue = 1)
    private Long customerId;

    @Column(name = "first_name", nullable = false)
    @Setter
    private String firstName;

    @Column(name = "last_name", nullable = false)
    @Setter
    private String lastName;

    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(joinColumns = @JoinColumn(name = "customer_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "role_id", nullable = false))
    @Setter
    @JsonIgnore
    private Set<Role> roles = new HashSet<>();

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "customer")
    @JsonIgnore
    @Setter
    private Set<Journal> journals = new HashSet<>();

    @Column(name = "creation_date", nullable = false)
    private LocalDateTime creationDate;

    @Column(name = "last_modification_date", nullable = false)
    private LocalDateTime lastModificationDate;
    //    TODO passwords
    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    @PrePersist
    protected void onPrePersist() {
        LocalDateTime now = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
        creationDate = now;
        lastModificationDate = now;
    }

    @PreUpdate
    protected void onPreUpdate() {
        lastModificationDate = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
    }
}

