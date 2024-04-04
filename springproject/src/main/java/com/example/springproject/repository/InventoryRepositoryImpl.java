package com.example.springproject.repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.stereotype.Repository;

import com.example.springproject.model.Inventory;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
/*
@Repository
public class InventoryRepositoryImpl  implements InventoryRepository {
	
	
	@PersistenceContext
	private EntityManager entitymanager;
	
	
	
	


	@Override
	public List<Inventory> getAll() {
		// TODO Auto-generated method stub
		String queryString = "Select * from inventory";
		
	    List<Inventory> list = entitymanager.createNativeQuery(queryString,Inventory.class).getResultList();
	    return list;}



	@Override
	public Inventory getAllDetails(int pid) {
		// TODO Auto-generated method stub
		return entitymanager.find(Inventory.class, pid);
	}



	@Override
	@Transactional
	public void add(Inventory invent) {
		// TODO Auto-generated method stub
		entitymanager.persist(invent);
		
	}



	


}
*/
