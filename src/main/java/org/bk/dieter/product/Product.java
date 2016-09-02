package org.bk.dieter.product;

import lombok.*;
import org.bk.dieter.journal.Journal;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Set;

/**
 * Created by redi on 03.04.2016.
 */
@Entity
@Getter
@Setter
@ToString
@Table(name = "product")
public class Product {

    @Id
    @Column(name = "product_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_id_gen")
    @SequenceGenerator(name = "product_id_gen", sequenceName = "seq_product_id", initialValue = 1, allocationSize = 1)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "calories", nullable = false)
    private int calories;

    @Column(name = "carbohydrates", nullable = false)
    private int carbohydrates;

    @Column(name = "fats", nullable = false)
    private int fats;

    @Column(name = "proteins", nullable = false)
    private int proteins;

    @Column(name = "creation_date", nullable = false)
    private LocalDateTime creationDate;

    @Column(name = "last_modification_date", nullable = false)
    private LocalDateTime lastModificationDate;

    @ManyToMany(mappedBy = "products")
    private Set<Journal> journals;

    @PrePersist
    protected void onPrePersist() {
        creationDate = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
    }

    @PreUpdate
    protected void onPreUpdate() {
        lastModificationDate = ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
    }
}
