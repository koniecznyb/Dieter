package org.bk.dieter.root;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by redi on 05.04.2016.
 */
@RestController
public class RootController {

    @RequestMapping("/")
    public String rootPage(){
        return "Welcome to the main page of dieter application!";
    }
}
