package com.chiloane.cript.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chiloane.cript.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>   {
    
    Optional<Role> findByName(String name);
}
