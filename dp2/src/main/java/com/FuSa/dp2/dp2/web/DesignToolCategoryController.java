package com.FuSa.dp2.dp2.web;

import com.FuSa.dp2.dp2.domain.DesignToolCategory;
import com.FuSa.dp2.dp2.service.DesignToolCategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fusa/design")
public class DesignToolCategoryController {

    private final DesignToolCategoryService designToolCategoryService;

    public DesignToolCategoryController(DesignToolCategoryService designToolCategoryService){
        this.designToolCategoryService = designToolCategoryService;
    }

    @PostMapping("/create")
    public DesignToolCategory createTask(@RequestBody DesignToolCategory designTool){
        return designToolCategoryService.createDesignToolCategory(designTool);
    }

    @GetMapping("/find-all")
    public List<DesignToolCategory> getString(){
        return designToolCategoryService.findAll();
    }
}
