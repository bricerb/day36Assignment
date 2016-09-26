package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

/**
 * Created by Brice on 9/22/16.
 */

@Controller
public class MakeChocolateController {

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String makeChocolateHome(HttpSession session, Model model) {
        return "home";
    }
}
