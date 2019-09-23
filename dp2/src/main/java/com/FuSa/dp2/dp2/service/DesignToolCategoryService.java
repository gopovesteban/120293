package com.FuSa.dp2.dp2.service;

import com.FuSa.dp2.dp2.domain.DesignToolCategory;
import com.FuSa.dp2.dp2.repository.DesignToolCategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DesignToolCategoryService {

    private final DesignToolCategoryRepository designToolCategoryRepository;

    public DesignToolCategoryService(DesignToolCategoryRepository designToolCategoryRepository){
        this.designToolCategoryRepository = designToolCategoryRepository;
    }

    @Transactional()
    public DesignToolCategory createDesignToolCategory(DesignToolCategory designToolCategory){
        return designToolCategoryRepository.save(designToolCategory);
    }

    @Transactional(readOnly = true)
    public List<DesignToolCategory> findAll(){
        return designToolCategoryRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<DesignToolCategory> findById(long id){
        return designToolCategoryRepository.findById(id);
    }
}
