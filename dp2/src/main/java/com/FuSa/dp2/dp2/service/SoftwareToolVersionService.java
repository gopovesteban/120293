package com.FuSa.dp2.dp2.service;

import com.FuSa.dp2.dp2.repository.SoftwareToolVersionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SoftwareToolVersionService {

    private final SoftwareToolVersionRepository softwareToolVersionRepository;

    public SoftwareToolVersionService(SoftwareToolVersionRepository softwareToolVersionRepository){
        this.softwareToolVersionRepository = softwareToolVersionRepository;
    }

}
