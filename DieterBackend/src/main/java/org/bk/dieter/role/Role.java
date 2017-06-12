package org.bk.dieter.role;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.bk.dieter.user.Customer;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Bartłomiej Konieczny on 02-Sep-16.
 */
@Getter
@Entity
@Table(name = "role")
public class Role implements GrantedAuthority {

    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role_id_gen")
    @SequenceGenerator(name = "role_id_gen", sequenceName = "seq_role_id", allocationSize = 1, initialValue = 1)
    private Long id;

    @Column(name = "role_name", nullable = false)
    @JsonIgnore
    @Setter
    private String roleName;

    @ManyToMany(mappedBy = "roles")
    @JsonIgnore
    @Setter
    private Set<Customer> customers = new HashSet<>();

    @Override
    public String getAuthority() {
        return roleName;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                '}';
    }
}
