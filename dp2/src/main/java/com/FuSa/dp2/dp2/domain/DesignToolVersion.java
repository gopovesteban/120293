package com.FuSa.dp2.dp2.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
public class DesignToolVersion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String name;

    private String isoQual;

    private String iecQual;

    @Size(max = 1000)
    private String resultsLink;

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

    public String getIsoQual() {
        return isoQual;
    }

    public void setIsoQual(String isoQual) {
        this.isoQual = isoQual;
    }

    public String getIecQual() {
        return iecQual;
    }

    public void setIecQual(String iecQual) {
        this.iecQual = iecQual;
    }

    public String getResultsLink() {
        return resultsLink;
    }

    public void setResultsLink(String resultsLink) {
        this.resultsLink = resultsLink;
    }
}
