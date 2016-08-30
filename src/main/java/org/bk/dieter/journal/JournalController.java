package org.bk.dieter.journal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Optional;

/**
 * Created by redi on 2016-08-07.
 */
@RestController
public class JournalController {

    public static final Logger LOG = LoggerFactory.getLogger(JournalController.class);

    @Autowired
    JournalRepository journalRepository;

    @RequestMapping(value = "/journals", method = RequestMethod.GET)
    public
    @ResponseBody
    Iterable<Journal> getJournals() {
        return journalRepository.findAll();
    }

    @RequestMapping(value = "/journal", method = RequestMethod.POST)
    public
    @ResponseBody
    Journal saveJournal(@RequestBody Journal Journal) {
        LOG.info("saving Journal: " + Journal);
        Journal.setCreatedAt(ZonedDateTime.now(ZoneId.of("UTC")).toLocalDateTime());
        return journalRepository.save(Journal);
    }

    @RequestMapping(value = "/journal/{id}", method = RequestMethod.GET)
    public
    @ResponseBody
    Journal getJournal(@PathVariable("name") Long id) {
        Optional<Journal> Journal = journalRepository.findById(id);
        if (Journal.isPresent()) {
            return Journal.get();
        }
        return null;
    }
}
