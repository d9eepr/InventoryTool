package com.example.springproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springproject.dto.AddInventory;
import com.example.springproject.dto.PidDTO;
import com.example.springproject.model.Inventory;
//import com.example.springproject.service.InventoryService;
/*
@RestController
@CrossOrigin
public class InventoryController {
	
	@Autowired
	InventoryService invSer;
	
	@CrossOrigin
	@GetMapping("/search/{id}")
	public Inventory getAllInventory(@PathVariable("id") Integer id) {
		return invSer.getAllDetails(id);
		
	}
	
	@CrossOrigin
	@GetMapping(path="/invdetails")
	public List<Inventory> getAll(  ) {
		return invSer.getAll();
		
	}
	
	@PostMapping(path="/create")
	public String create(@RequestBody AddInventory dto) {
		String s;
		Inventory inv= dto.getInventoryDTO(dto);
		invSer.add(inv);
		s=inv.getConfig()+" "+inv.getModel();
		return s;
		
	}
	
	

}
*/