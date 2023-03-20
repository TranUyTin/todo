export interface Todo {
    id: number;
    task: string;
    complete: boolean;
}
  
export interface TodoListProps {
    todos: Todo[];
}