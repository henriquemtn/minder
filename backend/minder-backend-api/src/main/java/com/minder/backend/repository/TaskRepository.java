package com.minder.backend.repository;

import com.minder.backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {
    // Spring Data JPA will implement basic CRUD operations automatically
}