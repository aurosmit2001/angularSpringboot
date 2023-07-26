package com.example.crud_Yt.controller;

import com.example.crud_Yt.exception.ResourceNotFoundException;
import com.example.crud_Yt.model.Admin;
import com.example.crud_Yt.repository.adminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class adminController {
   @Autowired
    private adminRepository repository1;
   @GetMapping("/employees")
   public List<Admin> getAllEmployee(){
       return repository1.findAll();

   }
   @PostMapping("/employees")
   public Admin createEmployee(@RequestBody Admin employee){
       return repository1.save(employee);
   }

    // get employee by Id rest api
    @GetMapping("/employees/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Integer id){
        Admin admin = repository1.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        return ResponseEntity.ok(admin);
    }
    // update employee restApi
    @PutMapping("/employees/{id}")
    public ResponseEntity<Admin> updateAdmin (@PathVariable Integer id, @RequestBody Admin adminDetails){
        Admin admin = repository1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        admin.setFirstname(adminDetails.getFirstname());
        admin.setLastname(adminDetails.getLastname());
        admin.setEmailId(adminDetails.getEmailId());
        admin.setApproval(adminDetails.isApproval());

       Admin updatedAdmin = repository1.save(admin);
       return ResponseEntity.ok(updatedAdmin);
   }
   //delete employee restapi
    @DeleteMapping("/employees/{id}")
    public Map<String, Boolean> deleteAdmin(@PathVariable Integer id){
       Admin admin = repository1.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
   repository1.delete(admin);
   Map<String, Boolean> response = new HashMap<>();
   response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response).getBody();

   }

   @PostMapping("/employees/login")
    public Admin getEmployeeByEmailId(@RequestBody Admin admin) {
       Admin user = repository1.findByEmailId(admin.getEmailId());
       if(user.getPassword().equals(admin.getPassword()))
           return user;
       else
           return null;
   }
}

