interface Todo {
    event: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type ToggleAdd = (item: string) => void;
