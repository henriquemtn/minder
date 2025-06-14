# Create a virtual host
resource "rabbitmq_vhost" "minder_vhost" {
  name = var.vhost_name
}

# Set permissions for guest user on the virtual host
resource "rabbitmq_permissions" "guest_permissions" {
  user  = "guest"
  vhost = rabbitmq_vhost.minder_vhost.name

  permissions {
    configure = ".*"
    write     = ".*"
    read      = ".*"
  }
}

# Create exchange
resource "rabbitmq_exchange" "task_exchange" {
  name  = "task.exchange"
  vhost = rabbitmq_vhost.minder_vhost.name

  settings {
    type        = "direct"
    durable     = true
    auto_delete = false
  }
}

# Create queues
resource "rabbitmq_queue" "task_created_queue" {
  name  = "task.created.queue"
  vhost = rabbitmq_vhost.minder_vhost.name

  settings {
    durable     = true
    auto_delete = false
  }
}

resource "rabbitmq_queue" "task_updated_queue" {
  name  = "task.updated.queue"
  vhost = rabbitmq_vhost.minder_vhost.name

  settings {
    durable     = true
    auto_delete = false
  }
}

resource "rabbitmq_queue" "task_deleted_queue" {
  name  = "task.deleted.queue"
  vhost = rabbitmq_vhost.minder_vhost.name

  settings {
    durable     = true
    auto_delete = false
  }
}

# Create bindings
resource "rabbitmq_binding" "task_created_binding" {
  source           = rabbitmq_exchange.task_exchange.name
  vhost            = rabbitmq_vhost.minder_vhost.name
  destination      = rabbitmq_queue.task_created_queue.name
  destination_type = "queue"
  routing_key      = "task.created"
}

resource "rabbitmq_binding" "task_updated_binding" {
  source           = rabbitmq_exchange.task_exchange.name
  vhost            = rabbitmq_vhost.minder_vhost.name
  destination      = rabbitmq_queue.task_updated_queue.name
  destination_type = "queue"
  routing_key      = "task.updated"
}

resource "rabbitmq_binding" "task_deleted_binding" {
  source           = rabbitmq_exchange.task_exchange.name
  vhost            = rabbitmq_vhost.minder_vhost.name
  destination      = rabbitmq_queue.task_deleted_queue.name
  destination_type = "queue"
  routing_key      = "task.deleted"
}