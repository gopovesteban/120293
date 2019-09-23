package com.FuSa.dp2.dp2.web;

import com.FuSa.dp2.dp2.domain.SoftwareTool;
import com.FuSa.dp2.dp2.service.SoftwareToolService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fusa/software")
public class SoftwareToolController {

    private final SoftwareToolService softwareToolService;

    public SoftwareToolController(SoftwareToolService softwareToolService){
        this.softwareToolService = softwareToolService;
    }


    @PostMapping("/create")
    public SoftwareTool createTask(@RequestBody SoftwareTool softwareTool){
        return softwareToolService.createSoftwareTool(softwareTool);
    }

    @GetMapping("/find-all")
    public List<SoftwareTool> getString(){
        return softwareToolService.findAll();
    }

    @GetMapping("/get/{id}")
    public Optional<SoftwareTool> getById(@PathVariable long id){
        return softwareToolService.findById(id);
    }

}
