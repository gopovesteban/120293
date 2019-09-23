package com.FuSa.dp2.dp2.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
public class DesignTool {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String name;

    private String version;


    private String Owner;

    private String Description;

    @OneToMany(cascade=CascadeType.ALL)
    private Set<DesignToolVersion> versions = new HashSet<>();

    public Long getId() {
        return id;
    }

    public Set<DesignToolVersion> getVersions() {
        return versions;
    }

    public void setVersions(Set<DesignToolVersion> versions) {
        this.versions = versions;
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

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }


    public String getOwner() {
        return Owner;
    }

    public void setOwner(String owner) {
        Owner = owner;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

}
