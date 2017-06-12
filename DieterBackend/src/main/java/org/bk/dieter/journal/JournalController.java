package org.bk.dieter.journal;

import com.google.common.collect.Lists;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * Created by redi on 2016-08-07.
 */
@RestController
@Secured("ROLE_USER")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class JournalController {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @NonNull
    private final JournalRepository journalRepository;

    @RequestMapping(value = "/journals", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Iterable<Journal>> getJournals() {
        List<Journal> journalRestObjectList = Lists.newArrayList(journalRepository.findAll());

        journalRestObjectList.forEach(j -> j.add(linkTo(JournalController.class).slash(j.getId()).withSelfRel()));
        journalRestObjectList.sort((o1, o2) -> o1.getLastModificationDate().compareTo(o2.getLastModificationDate()));

        return new ResponseEntity<>(journalRestObjectList, HttpStatus.OK);
    }

    @RequestMapping(value = "/journals", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Journal> saveJournal(@RequestBody Journal journal) {
        LOG.info("saving Journal: " + journal);
        Journal savedJournal = journalRepository.save(journal);
        if (savedJournal != null) {
            return new ResponseEntity<>(savedJournal, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/journal/{id}", method = RequestMethod.GET)
    @ResponseBody
    public
    ResponseEntity<Journal> getJournal(@PathVariable("id") Long id) {
        Optional<Journal> Journal = journalRepository.findByJournalId(id);
        if (Journal.isPresent()) {
            return new ResponseEntity<>(Journal.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
