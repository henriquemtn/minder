output "rabbitmq_vhost" {
  value = rabbitmq_vhost.minder_vhost.name
}

output "rabbitmq_exchange" {
  value = rabbitmq_exchange.task_exchange.name
}

output "rabbitmq_queues" {
  value = [
    rabbitmq_queue.task_created_queue.name,
    rabbitmq_queue.task_updated_queue.name,
    rabbitmq_queue.task_deleted_queue.name
  ]
}