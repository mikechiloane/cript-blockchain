package com.chiloane.cript.service;
import com.chiloane.cript.dto.FeignWalletDto;
import com.chiloane.cript.dto.NodeWalletDto;
import com.chiloane.cript.exception.NotFoundException;
import com.chiloane.cript.feign.NodeClient;
import com.chiloane.cript.model.BitcoinWallet;
import com.chiloane.cript.model.User;
import com.chiloane.cript.repository.BitcoinWalletRepository;
import com.chiloane.cript.repository.UserRepository;
import com.chiloane.cript.service.impl.BitcoinWalletServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BitcoinWalletServiceTest {

    @InjectMocks
    private BitcoinWalletServiceImpl bitcoinWalletService;

    @Mock
    private BitcoinWalletRepository bitcoinWalletRepository;

    @Mock
    private NodeClient nodeClient;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testCreateWallet() {
        String userEmail = "test@example.com";
        User existingUser = new User();
        existingUser.setEmail(userEmail);

        NodeWalletDto nodeWalletDto = new NodeWalletDto();
        nodeWalletDto.setAddress("testAddress");
        nodeWalletDto.setPrivateKey("testPrivateKey");
        when(userRepository.findByEmail(userEmail)).thenReturn(existingUser);
        when(nodeClient.createWallet()).thenReturn(nodeWalletDto);
        bitcoinWalletService.createWallet(userEmail);
        verify(userRepository, times(1)).findByEmail(userEmail);
        verify(bitcoinWalletRepository, times(1)).save(any(BitcoinWallet.class));
    }

    @Test
    void testCreateWalletUserNotFound() {
        String userEmail = "nonexistent@example.com";

        when(userRepository.findByEmail(userEmail)).thenReturn(null);

        assertThrows(NotFoundException.class, () -> bitcoinWalletService.createWallet(userEmail));
    }

    @Test
    void testGetWalletBalance() {
        String userEmail = "test@example.com";
        User existingUser = new User();
        existingUser.setEmail(userEmail);

        BitcoinWallet bitcoinWallet = new BitcoinWallet();
        bitcoinWallet.setAddress("testAddress");

        BigDecimal initialBalance = BigDecimal.valueOf(0.0);

        when(userRepository.findByEmail(userEmail)).thenReturn(existingUser);
        when(bitcoinWalletRepository.findByUserEmail(userEmail)).thenReturn(bitcoinWallet);
        when(nodeClient.getBalance(bitcoinWallet.getAddress())).thenReturn(new FeignWalletDto());

        FeignWalletDto feignWalletDto = bitcoinWalletService.getWalletBalance(userEmail);

        assertEquals(initialBalance, BigDecimal.valueOf(feignWalletDto.getBalance()));
    }

    @Test
    void testGetWalletBalanceUserNotFound() {
        String userEmail = "nonexistent@example.com";

        when(userRepository.findByEmail(userEmail)).thenReturn(null);

        assertThrows(NotFoundException.class, () -> bitcoinWalletService.getWalletBalance(userEmail));
    }

    @Test
    void testGetWalletBalanceWalletNotFound() {
        String userEmail = "test@example.com";
        User existingUser = new User();
        existingUser.setEmail(userEmail);

        when(userRepository.findByEmail(userEmail)).thenReturn(existingUser);
        when(bitcoinWalletRepository.findByUserEmail(userEmail)).thenReturn(null);

        assertThrows(NotFoundException.class, () -> bitcoinWalletService.getWalletBalance(userEmail));
    }
}
