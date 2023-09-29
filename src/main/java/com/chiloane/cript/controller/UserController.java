package com.chiloane.cript.controller;


import com.chiloane.cript.dto.UserDto;
import com.chiloane.cript.service.UserService;
import com.chiloane.cript.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping
    public UserDto getUser(@RequestParam String email) {
        return userService.findByEmail(email);
    }
    @PostMapping
    public UserDto createUser(@RequestBody UserDto userDto) {
        return userService.createUser(userDto);
    }
}
