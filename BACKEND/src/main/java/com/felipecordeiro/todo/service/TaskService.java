package com.felipecordeiro.todo.service;

import com.felipecordeiro.todo.dto.task.TaskRequestDTO;
import com.felipecordeiro.todo.dto.task.TaskResponseDTO;
import com.felipecordeiro.todo.model.Task;
import com.felipecordeiro.todo.repository.TaskRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    @Transactional(readOnly = true)
    public Page<TaskResponseDTO> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(TaskResponseDTO::new);
    }

    @Transactional(readOnly = true)
    public TaskResponseDTO findById(Long id) {
        Task entity = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Entity not found!"));
        return new TaskResponseDTO(entity);
    }

    @Transactional
    public TaskResponseDTO insert(TaskRequestDTO dto) {
        Task entity = new Task(
                dto.title(),
                dto.description(),
                dto.completed()
        );
        return new TaskResponseDTO(repository.save(entity));
    }

    @Transactional
    public TaskResponseDTO update(Long id, TaskRequestDTO dto) {
        try {
            Task entity = repository.getReferenceById(id);
            entity.setTitle(dto.title());
            entity.setDescription(dto.description());
            entity.setCompleted(dto.completed());

            return new TaskResponseDTO(entity);
        } catch (Exception e) {
            throw new RuntimeException("Error updating entity");
        }
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Entity not found!");
        }
        repository.deleteById(id);
    }
}
