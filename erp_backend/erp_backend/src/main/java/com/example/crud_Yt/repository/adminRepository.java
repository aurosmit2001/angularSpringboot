package com.example.crud_Yt.repository;

import com.example.crud_Yt.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface adminRepository extends JpaRepository<Admin,Integer> {
    @Query("select e from Admin e where e.emailId = ?1")
    Admin findByEmailId(String emailId);
}
