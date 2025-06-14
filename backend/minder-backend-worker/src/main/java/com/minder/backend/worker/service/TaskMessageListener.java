package com.minder.backend.worker.service;

import com.minder.backend.worker.model.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TaskMessageListener {
    
    private static final Logger logger = LoggerFactory.getLogger(TaskMessageListener.class);
    
    @RabbitListener(queues = "task.created.queue")
    public void handleTaskCreated(Task task) {
        logger.info("Received task created message: {}", task.getId());
        // Process new task
        logger.info("Processing new task: {} - {}", task.getTitle(), task.getDescription());
    }
    
    @RabbitListener(queues = "task.updated.queue")
    public void handleTaskUpdated(Task task) {
        logger.info("Received task updated message: {}", task.getId());
        // Process updated task
        logger.info("Task updated: {} - Status: {}", task.getTitle(), task.getStatus());
    }
    
    @RabbitListener(queues = "task.deleted.queue")
    public void handleTaskDeleted(String taskId) {
        logger.info("Received task deleted message: {}", taskId);
        // Process deleted task
        logger.info("Task deleted with ID: {}", taskId);
    }
}