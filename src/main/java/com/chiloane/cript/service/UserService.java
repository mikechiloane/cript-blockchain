package com.chiloane.cript.service;

import com.chiloane.cript.dto.UserDto;
import org.springframework.scheduling.annotation.Async;

import java.util.List;

public interface UserService {


    UserDto findByEmail(String email);
    List<UserDto> getAllUsers();
    UserDto createUser(UserDto userDto);
    UserDto updateUserEmail(Long id, String email);
    UserDto updateFirstName(Long id, String firstName);
    UserDto updateLastName(Long id, String lastName);
    void updatePassword(Long id, String password);
    void deleteUser(Long id);
}
