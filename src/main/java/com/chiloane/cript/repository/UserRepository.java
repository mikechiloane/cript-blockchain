package com.chiloane.cript.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chiloane.cript.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    User findByEmail(String email);
}
