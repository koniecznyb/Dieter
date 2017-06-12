package org.bk.dieter.user.journal;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bk.dieter.journal.Journal;
import org.bk.dieter.journal.JournalRepository;
import org.bk.dieter.user.Customer;
import org.bk.dieter.user.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

/**
 * Created by SG0224958 on 07.10.16.
 */
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class CustomerJournalService {

    private final
    @NonNull
    CustomerRepository customerRepository;

    private final
    @NonNull
    JournalRepository journalRepository;

    public Customer addJournalToCustomer(Journal journal, Customer customer) {
        Set<Journal> customerJournals = customer.getJournals();
        journal.setCustomer(customer);
        customerJournals.add(journal);
        journalRepository.save(journal);
        customerRepository.save(customer);
        return customer;
    }
}
