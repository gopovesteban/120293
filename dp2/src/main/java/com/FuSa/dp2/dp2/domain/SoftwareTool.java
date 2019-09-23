package com.FuSa.dp2.dp2.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class SoftwareTool {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String name;

    private String currentVersion;

    private String compliancy;

    @OneToMany(cascade=CascadeType.ALL)
    private Set<SoftwareToolVersion> versions = new HashSet<>();

    @OneToMany(cascade=CascadeType.ALL)
    private Set<Certification> certifications = new HashSet<>();

    public Set<Certification> getCertifications() {
        return certifications;
    }

    public void setCertifications(Set<Certification> certifications) {
        this.certifications = certifications;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCurrentVersion() {
        return currentVersion;
    }

    public void setCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
    }

    public String getCompliancy() {
        return compliancy;
    }

    public void setCompliancy(String compliancy) {
        this.compliancy = compliancy;
    }

    public Set<SoftwareToolVersion> getVersions() {
        return versions;
    }

    public void setVersions(Set<SoftwareToolVersion> versions) {
        this.versions = versions;
    }
}
