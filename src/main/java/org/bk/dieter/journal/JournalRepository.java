package org.bk.dieter.journal;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.Optional;
import java.util.Set;

/**
 * Created by redi on 2016-08-07.
 */
@PreAuthorize("hasRole('ROLE_USER')")
public interface JournalRepository extends CrudRepository<Journal, Long> {

    Optional<Journal> findById(Long id);
}
