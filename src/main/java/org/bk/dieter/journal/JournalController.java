package org.bk.dieter.journal;

import com.google.common.collect.Lists;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

    private final
    @NonNull
    JournalRepository journalRepository;

    @RequestMapping(value = "/journals", method = RequestMethod.GET)
    public
    @ResponseBody
    Iterable<Journal> getJournals() {
        List<Journal> journalRestObjectList = Lists.newArrayList(journalRepository.findAll());

        journalRestObjectList.forEach(j -> j.add(linkTo(JournalController.class).slash(j.getId()).withSelfRel()));
        journalRestObjectList.sort((o1, o2) -> o1.getLastModificationDate().compareTo(o2.getLastModificationDate()));

        return journalRestObjectList;
    }

    @RequestMapping(value = "/journals", method = RequestMethod.POST)
    public
    @ResponseBody
    Journal saveJournal(@RequestBody Journal journal) {
        LOG.info("saving Journal: " + journal);
        return journalRepository.save(journal);
    }

    @RequestMapping(value = "/journal/{id}", method = RequestMethod.GET)
    public
    @ResponseBody
    Journal getJournal(@PathVariable("id") Long id) {
        Optional<Journal> Journal = journalRepository.findByJournalId(id);
        if (Journal.isPresent()) {
            return Journal.get();
        }
        return null;
    }
}
