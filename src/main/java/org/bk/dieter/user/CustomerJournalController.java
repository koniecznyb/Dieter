package org.bk.dieter.user;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bk.dieter.journal.Journal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * Created by redi on 2016-09-26.
 */
@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CustomerJournalController {

    private final
    @NonNull
    CustomerService customerService;

    private final
    @NonNull
    CustomerJournalService customerJournalService;

    @Secured("ROLE_USER")
    @RequestMapping(value = "/user/{firstName}/journals", method = RequestMethod.GET)
    public Set<Journal> getCustomerJournals(@PathVariable String firstName) {
        Optional<Customer> customer = customerService.findByFirstName(firstName);
        if (!customer.isPresent()) {
            return null;
        }

        customer.get().getJournals().forEach(journal -> {
            journal.add(linkTo(Customer.class).slash("user").slash(journal.getCustomer().getFirstName()).withRel("customer"));
            journal.add(linkTo(Journal.class).slash("journal").slash(journal.getJournalId()).withSelfRel());
        });

        return customer.get().getJournals();
    }

    @Secured("ROLE_USER")
    @RequestMapping(value = "/user/{firstName}/journals", method = RequestMethod.POST)
    public Set<Journal> postCustomerJournal(@PathVariable String firstName, @RequestBody Journal journal) {
        Optional<Customer> customerOptional = customerService.findByFirstName(firstName);
        if (!customerOptional.isPresent()) {
            return null;
        }
        Customer updatedCustomer = customerJournalService.addJournalToCustomer(journal, customerOptional.get());
        return updatedCustomer.getJournals();
    }
}
