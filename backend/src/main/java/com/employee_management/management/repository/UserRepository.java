package com.employee_management.management.repository;

import com.employee_management.management.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User,String> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    Optional<User> findByRole(String role);
}