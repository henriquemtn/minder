variable "rabbitmq_endpoint" {
  description = "The RabbitMQ management endpoint"
  default     = "http://localhost:15672"
}

variable "rabbitmq_username" {
  description = "The RabbitMQ admin username"
  default     = "guest"
}

variable "rabbitmq_password" {
  description = "The RabbitMQ admin password"
  sensitive   = true
  default     = "guest"
}

variable "vhost_name" {
  description = "The name of the RabbitMQ virtual host"
  default     = "minder"
}