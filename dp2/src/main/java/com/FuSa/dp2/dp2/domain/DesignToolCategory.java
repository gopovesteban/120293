package com.FuSa.dp2.dp2.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class DesignToolCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(cascade=CascadeType.ALL)
    private Set<DesignTool> tools = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<DesignTool> getTools() {
        return tools;
    }

    public void setTools(Set<DesignTool> tools) {
        this.tools = tools;
    }
}
