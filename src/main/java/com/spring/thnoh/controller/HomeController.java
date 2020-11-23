package com.spring.thnoh.controller;

import com.spring.thnoh.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String home(){
        return "home";
    }

    @RequestMapping(value = "/add")
    public String addSalary(Model model){

        User user = new User();
        model.addAttribute("user",user);

        return "addSalary";
    }
}