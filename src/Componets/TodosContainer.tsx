//This component will have a todo list as a prop
//then we will map into several TodoCards

import type { TodoContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({
  todosList,
  handleTodoCheck,
  handleTodoDelete,
  handleEditTodo,
}: TodoContainerProps) {
  return (
    <div>
      {todosList.length === 0 && <p>Todo list is empty</p>}
      {todosList.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
          handleToCheck={handleTodoCheck}
          handleTodoDelete={handleTodoDelete}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
}
