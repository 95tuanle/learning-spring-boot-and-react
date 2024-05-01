package com.nguyenanhtuan.le.wisdompet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SPAController {
    @RequestMapping(value = "/{:[^.]*}")
    public String redirect() {
        return "forward:/";
    }
}
