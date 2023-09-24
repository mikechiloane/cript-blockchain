package com.chiloane.cript.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Table(name = "roles")
@Entity
@Data
public class Role {
    @Id
    private Long id;
    @Enumerated(EnumType.STRING)
    private ERole name = ERole.ROLE_USER;
    
}
