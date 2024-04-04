package com.example.springproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springproject.exception.ResourceNotFoundException;
import com.example.springproject.model.Inventory;
import com.example.springproject.model.User;
import com.example.springproject.repository.UserRepository;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	UserRepository userrepo;
	
	
	@GetMapping(path="/viewAllUser")
	public List<User> getAll(){
		return userrepo.findAll();
	}
	
	@GetMapping(path="/findUser/{empid}")
	public User searchUser(@PathVariable Long empid) {
		return userrepo.findById(empid).orElseThrow(()-> new ResourceNotFoundException("  User Not found" + empid));
		
		
	}
	@GetMapping(path="/login")
	public boolean login(@RequestBody User user){
		User ur= userrepo.findById(user.getEmpid()).orElseThrow(() -> new ResourceNotFoundException(" not exist : "+user.getEmpid()));
		return ur.getUpassword().equals(user.getUpassword());
	}
	

}
