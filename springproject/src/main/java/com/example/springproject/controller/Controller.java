package com.example.springproject.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springproject.exception.ResourceNotFoundException;
import com.example.springproject.model.Inventory;
import com.example.springproject.repository.InventoryRepository;

@CrossOrigin
@RestController
public class Controller {
	@Autowired
	 InventoryRepository inventrepo;
	
	@GetMapping(path="/invdetails")
	public List<Inventory> getAll(  ) {
		return inventrepo.findAll();
		
	}
	@PostMapping(path="/create")
	public Inventory createInventory(@RequestBody Inventory invent) {
		return inventrepo.save(invent);
	}
	@CrossOrigin
	@GetMapping(path="/search/{id}")
	public Inventory searchInventory(@PathVariable Integer id) {
		return inventrepo.findById(id).orElseThrow(() -> new ResourceNotFoundException(" not exist : "+id));
	
	// public ResponseEntity<Inventory> searchInventory(@PathVariable Integer id) {
		
	//	Inventory invent= inventrepo.findById(id).orElseThrow(() -> new ResourceNotFoundException(" not exist : "+id));
	//	return ResponseEntity.ok(invent);
	}
	
	@PutMapping(path="/update/{id}")
         public ResponseEntity<Inventory> updateInventory(@PathVariable Integer id,@RequestBody Inventory invents) {
		
		Inventory invent= inventrepo.findById(id).orElseThrow(() -> new ResourceNotFoundException(" not exist : "+id));
		invent.setConfig(invents.getConfig());
		invent.setModel(invents.getModel());
		invent.setOwner(invents.getOwner());
		
		Inventory updatedInvent= inventrepo.save(invent);
		return ResponseEntity.ok(updatedInvent);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Integer id){
		Inventory invent = inventrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("inventory not exist with id :" + id));
		
		inventrepo.delete(invent);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
	

}
