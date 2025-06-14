package com.minder.backend.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Bean
    public DirectExchange taskExchange() {
        return new DirectExchange("task.exchange");
    }

    @Bean
    public Queue taskCreatedQueue() {
        return new Queue("task.created.queue", true);
    }

    @Bean
    public Queue taskUpdatedQueue() {
        return new Queue("task.updated.queue", true);
    }

    @Bean
    public Queue taskDeletedQueue() {
        return new Queue("task.deleted.queue", true);
    }

    @Bean
    public Binding bindingTaskCreated(Queue taskCreatedQueue, DirectExchange taskExchange) {
        return BindingBuilder.bind(taskCreatedQueue).to(taskExchange).with("task.created");
    }

    @Bean
    public Binding bindingTaskUpdated(Queue taskUpdatedQueue, DirectExchange taskExchange) {
        return BindingBuilder.bind(taskUpdatedQueue).to(taskExchange).with("task.updated");
    }

    @Bean
    public Binding bindingTaskDeleted(Queue taskDeletedQueue, DirectExchange taskExchange) {
        return BindingBuilder.bind(taskDeletedQueue).to(taskExchange).with("task.deleted");
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(jsonMessageConverter());
        return template;
    }
}