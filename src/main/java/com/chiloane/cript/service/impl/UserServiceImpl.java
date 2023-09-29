package com.chiloane.cript.service.impl;

import java.util.List;

import com.chiloane.cript.exception.AlreadyExistsException;
import com.chiloane.cript.model.Role;
import org.springframework.stereotype.Service;

import com.chiloane.cript.dto.UserDto;
import com.chiloane.cript.exception.NotFoundException;
import com.chiloane.cript.model.User;
import com.chiloane.cript.repository.UserRepository;
import com.chiloane.cript.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final BitcoinWalletServiceImpl bitcoinWalletService;

    @Override
    public UserDto findByEmail(String email) {

        User existingUser = userRepository.findByEmail(email);
        if (existingUser == null) {
            throw new NotFoundException("User not found: " + email);
        }
        UserDto userDto = new UserDto();
        userDto.setEmail(existingUser.getEmail());
        userDto.setName(existingUser.getName());
        userDto.setAddress(existingUser.getBitcoinWallet().getAddress());
        return userDto;
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user-> new UserDto(user.getEmail(), user.getName(), user.getBitcoinWallet().getAddress())).
            collect(java.util.stream.Collectors.toList());
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        User existingUser = userRepository.findByEmail(userDto.getEmail());

        if (existingUser != null) {
            throw new AlreadyExistsException("User already exists");
        }
        User user = User.builder()
                .email(userDto.getEmail())
                .name(userDto.getName())
                .build();
        userRepository.save(user);
        bitcoinWalletService.createWallet(userDto.getEmail());

        return userDto;
    }

    @Override
    public UserDto updateUserEmail(Long id, String email) {
        throw new UnsupportedOperationException("Unimplemented method 'updateUserEmail'");
    }

    @Override
    public UserDto updateFirstName(Long id, String firstName) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateFirstName'");
    }

    @Override
    public UserDto updateLastName(Long id, String lastName) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateLastName'");
    }

    @Override
    public void updatePassword(Long id, String password) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updatePassword'");
    }

    @Override
    public void deleteUser(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

}
