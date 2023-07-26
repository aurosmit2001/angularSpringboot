package com.example.crud_Yt.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Employee", uniqueConstraints={@UniqueConstraint(columnNames={"Email_Id"})})
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    @Column(name = "First_Name")
    private String firstname;
    @Column(name = "Last_Name")
    private String lastname;
    @Column(name= "Email_Id")
    private String emailId;
    @Column(name = "Password")
    private  String password;
    private boolean approval;
    private String department;
    private String role;
    private String designation;
    private String country;



}
