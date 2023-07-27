package com.maddoxgraham.employeemanager.model;

import jakarta.persistence.*;

import java.io.Serializable;
// serializable aide à l'envoi des données en Json


@Entity
public class Employee implements Serializable {
    // Chaque employé possède des données.
    //pour l'id on va définir qu'il s'agira de l'id de l'entité et qu'on ne pourra pas modifier ou mettre cette colonne nulle
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private Boolean isTeam;
    private String imageUrl;

    //default constructeur
    public Employee(){}

    //constructeur contenant des parametres
    public Employee(Long id, String name, String email, String jobTitle, Boolean isTeam, String imageUrl) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.isTeam = isTeam;
        this.imageUrl = imageUrl;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public Boolean getTeam() {
        return isTeam;
    }

    public void setTeam(Boolean team) {
        isTeam = team;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    //adding a toString Method
    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", isTeam=" + isTeam +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
