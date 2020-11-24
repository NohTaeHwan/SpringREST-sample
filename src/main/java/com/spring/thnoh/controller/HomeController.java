package com.spring.thnoh.controller;

import com.spring.thnoh.model.User;
import com.spring.thnoh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/")
    public String home(){
        return "home";
    }

    @RequestMapping(value = "/add")
    public String addUser(Model model){

        User user = new User();
        model.addAttribute("user",user);

        return "addUser";
    }

    @RequestMapping(value = "/update/{id}")
    public String updateUser(@PathVariable("id") long id, Model model){

        User user = userService.findById(id);
        model.addAttribute("user",user);
        return "updateUser";
    }
}