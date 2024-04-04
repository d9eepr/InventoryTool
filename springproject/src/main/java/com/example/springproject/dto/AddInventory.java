package com.example.springproject.dto;

import com.example.springproject.model.Inventory;

public class AddInventory {
	
	private String model;
	private String owner;
	private String config;

	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getConfig() {
		return config;
	}
	public void setConfig(String config) {
		this.config = config;
	}
	public Inventory getInventoryDTO(AddInventory dto) {
		Inventory rt = new Inventory();
		return rt;
	}

}
