package com.desafio.todoapp.controller;

import com.desafio.todoapp.exception.ResourceNotFoundException;
import com.desafio.todoapp.model.Task;
import com.desafio.todoapp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/tasks")
    public Page<Task> getTasks(Pageable pageable) {
        return taskRepository.findAll(pageable);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/tasks")
    public Task createTask(@Valid @RequestBody Task task) {
        return taskRepository.save(task);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/tasks/{taskId}")
    public Task updateTask(@PathVariable Long taskId, @Valid @RequestBody Task taskRequest) {
        return taskRepository.findById(taskId).map(task -> {
            task.setTitle(taskRequest.getTitle());
            task.setState(taskRequest.getState());
            return taskRepository.save(task);
        }).orElseThrow(() -> new ResourceNotFoundException("Task not found with id " + taskId));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/tasks/{taskId}")
    public ResponseEntity<?> deleteTask(@PathVariable Long taskId) {
        return taskRepository.findById(taskId).map(task -> {
            taskRepository.delete(task);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Task not found with id " + taskId));
    }
}