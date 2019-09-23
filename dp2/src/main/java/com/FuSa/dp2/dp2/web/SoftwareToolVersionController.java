package com.FuSa.dp2.dp2.web;

import com.FuSa.dp2.dp2.service.SoftwareToolVersionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fusa")
public class SoftwareToolVersionController {

    private final SoftwareToolVersionService softwareToolVersionService;

    public SoftwareToolVersionController(SoftwareToolVersionService softwareToolVersionService){
        this.softwareToolVersionService = softwareToolVersionService;
    }
}
