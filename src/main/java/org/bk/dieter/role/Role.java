package org.bk.dieter.role;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.bk.dieter.user.Customer;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Bartłomiej Konieczny on 02-Sep-16.
 */
@Getter
@Entity
@ToString
@Table(name = "role")
public class Role {

    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role_id_gen")
    @SequenceGenerator(name = "role_id_gen", sequenceName = "seq_role_id", allocationSize = 1, initialValue = 1)
    private Long id;

    @Column(name = "role_name", nullable = false)
    @Setter
    private String roleName;

    @ManyToMany(mappedBy = "roles")
    @Setter
    private Set<Customer> customers = new HashSet<>();
}
