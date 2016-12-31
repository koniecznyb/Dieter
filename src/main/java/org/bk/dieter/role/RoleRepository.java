package org.bk.dieter.role;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/**
 * Created by SG0224958 on 29.12.16.
 */
public interface RoleRepository extends CrudRepository<Role, Long> {

    Optional<Role> findByRoleName(String roleName);
}
