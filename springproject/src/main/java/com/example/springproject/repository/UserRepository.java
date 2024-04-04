package com.example.springproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springproject.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
