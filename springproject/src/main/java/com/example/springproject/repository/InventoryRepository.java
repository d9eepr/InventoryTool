package com.example.springproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springproject.model.Inventory;


public interface InventoryRepository extends JpaRepository<Inventory,Integer> {
	

}
