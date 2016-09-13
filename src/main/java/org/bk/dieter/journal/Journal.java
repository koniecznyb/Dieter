package org.bk.dieter.journal;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.bk.dieter.product.Product;
import org.bk.dieter.user.Customer;
import org.springframework.security.access.annotation.Secured;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Set;

/**
 * Created by redi on 2016-08-07.
 */
@Entity
@Getter
@Table(name = "journal")
public class Journal {

    @Id
    @Column(name = "journal_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "journal_id_gen")
    @SequenceGenerator(name = "journal_id_gen", sequenceName = "seq_journal_id", allocationSize = 1, initialValue = 1)
    private Long id;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(joinColumns = @JoinColumn(name = "journal_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "product_id", nullable = false))
    @Setter
    private Set<Product> products;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id", nullable = false)
    @Setter
    private Customer customer;

    @Column(name = "creation_date", nullable = false)
    private LocalDateTime creationDate;

    @Column(name = "last_modification_date", nullable = false)
    private LocalDateTime lastModificationDate;

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
