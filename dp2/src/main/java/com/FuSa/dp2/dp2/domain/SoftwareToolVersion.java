package com.FuSa.dp2.dp2.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class SoftwareToolVersion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String compliancy;

    public String currentVersion;

    public Date qualifiedDate;

    @Size(max = 1000)
    public String resultsLink;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompliancy() {
        return compliancy;
    }

    public void setCompliancy(String compliancy) {
        this.compliancy = compliancy;
    }

    public String getCurrentVersion() {
        return currentVersion;
    }

    public void setCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
    }

    public Date getQualifiedDate() {
        return qualifiedDate;
    }

    public void setQualifiedDate(Date qualifiedDate) {
        this.qualifiedDate = qualifiedDate;
    }

    public String getResultsLink() {
        return resultsLink;
    }

    public void setResultsLink(String resultsLink) {
        this.resultsLink = resultsLink;
    }
}
