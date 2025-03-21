package com.felipecordeiro.todo.dto.task;

public record TaskRequestDTO(
        String title,
        String description,
        boolean completed
) {
}
