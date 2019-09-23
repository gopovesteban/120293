package com.FuSa.dp2.dp2.service;

import com.FuSa.dp2.dp2.domain.SoftwareTool;
import com.FuSa.dp2.dp2.repository.SoftwareToolRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SoftwareToolService {

    private final SoftwareToolRepository softwareToolRepository;

    public SoftwareToolService(SoftwareToolRepository softwareToolRepository){
        this.softwareToolRepository = softwareToolRepository;
    }

    @Transactional()
    public SoftwareTool createSoftwareTool(SoftwareTool softwareTool){
        return softwareToolRepository.save(softwareTool);
    }

    @Transactional(readOnly = true)
    public List<SoftwareTool> findAll(){
        return softwareToolRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<SoftwareTool> findById(long id){
        return softwareToolRepository.findById(id);
    }
}
