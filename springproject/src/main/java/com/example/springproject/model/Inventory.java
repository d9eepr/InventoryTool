package com.example.springproject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "inventory")
public class Inventory {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int pid;
	@Column(name = "config")
	private String config;
	@Column(name = "model")
	private String model;
	@Column(name = "owner")
	private String owner;
	
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getConfig() {
		return config;
	}
	public void setConfig(String config) {
		this.config = config;
	}
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
	
	public Inventory() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
