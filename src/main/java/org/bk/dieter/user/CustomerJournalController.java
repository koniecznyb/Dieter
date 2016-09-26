package org.bk.dieter.user;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bk.dieter.journal.Journal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.Set;

/**
 * Created by redi on 2016-09-26.
 */
@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CustomerJournalController {

    private final
    @NonNull
    CustomerRepository customerRepository;

    @Secured("ROLE_USER")
    @RequestMapping(value = "/user/{firstName}/journals", method = RequestMethod.GET)
    public Set<Journal> getCustomerJournals(@PathVariable String firstName) {
        Optional<Customer> customer = customerRepository.findByFirstName(firstName);
        if (!customer.isPresent()) {
            return null;
        } else {
            return customer.get().getJournals();
        }
    }


}
