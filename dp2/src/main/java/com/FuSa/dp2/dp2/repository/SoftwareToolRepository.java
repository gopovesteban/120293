package com.FuSa.dp2.dp2.repository;

import com.FuSa.dp2.dp2.domain.SoftwareTool;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SoftwareToolRepository extends JpaRepository<SoftwareTool,Long> {
}
