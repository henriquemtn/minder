package com.minder.backend.service;

import com.minder.backend.model.Task;
import com.minder.backend.repository.TaskRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final RabbitTemplate rabbitTemplate;

    @Autowired
    public TaskService(TaskRepository taskRepository, RabbitTemplate rabbitTemplate) {
        this.taskRepository = taskRepository;
        this.rabbitTemplate = rabbitTemplate;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskById(UUID id) {
        return taskRepository.findById(id);
    }

    public Task createTask(Task task) {
        task = taskRepository.save(task);
        
        // Send message to RabbitMQ
        rabbitTemplate.convertAndSend("task.exchange", "task.created", task);
        
        return task;
    }

    public Optional<Task> updateTask(UUID id, Task taskDetails) {
        return taskRepository.findById(id)
            .map(existingTask -> {
                existingTask.setTitle(taskDetails.getTitle());
                existingTask.setDescription(taskDetails.getDescription());
                existingTask.setStatus(taskDetails.getStatus());
                existingTask.setUpdatedAt(LocalDateTime.now());
                
                taskRepository.save(existingTask);
                
                // Send message to RabbitMQ
                rabbitTemplate.convertAndSend("task.exchange", "task.updated", existingTask);
                
                return existingTask;
            });
    }

    public boolean deleteTask(UUID id) {
        return taskRepository.findById(id)
            .map(task -> {
                taskRepository.delete(task);
                
                // Send message to RabbitMQ
                rabbitTemplate.convertAndSend("task.exchange", "task.deleted", id.toString());
                return true;
            })
            .orElse(false);
    }
}