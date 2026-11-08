import { useState, type ChangeEvent, type SubmitEvent } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./TodosContainer";

export interface TodoCardProps {
  id: string;
  title: string;
  checked: boolean;
}

export interface TodoContainerProps {
  todosList: TodoCardProps[];
  handleTodoCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoDelete: (id: string) => void;
  handleEditTodo: (id: string) => void;
}

export interface FormComponentProps extends TodoCardProps {
  handleFormOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
}

export interface TodoCardFunctions extends TodoCardProps {
  handleToCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoDelete: (id: string) => void;
  handleEditTodo: (id: string) => void;
}

export default function TodoApp() {
  //states
  //a state to store the input change
  //once the submit button is clicked will store the state
  //as a todo entry in other state will save a list of todos
  const [todo, setTodo] = useState<TodoCardProps>({
    id: "",
    title: "",
    checked: false,
  });

  //Second state: a state to store all the todos in one array
  const [todosList, setTodosList] = useState<TodoCardProps[]>([]);

  //handlers

  const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo((prevTodo) => ({ ...prevTodo, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.title.trim()) return;

    if (todo.id) {
      setTodosList((prevList) =>
        prevList.map((entry) => (entry.id === todo.id ? { ...todo } : entry))
      );
    } else {
      setTodosList((prevList) => [
        ...prevList,
        { id: crypto.randomUUID(), title: todo.title, checked: false },
      ]);
    }
    setTodo({ id: "", title: "", checked: false });
  };

  const handleTodoCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setTodosList((prevList) =>
      prevList.map((entry) =>
        entry.id === id ? { ...entry, checked: e.target.checked } : entry
      )
    );
  };

  const handleTodoDelete = (id: string) => {
    setTodosList((prevList) => prevList.filter((entry) => entry.id !== id));
  };

  const handleEditTodo = (id: string) => {
    const todoToEdit = todosList.find((entry) => entry.id === id);
    if (todoToEdit) {
      setTodo({ ...todoToEdit });
    }
  };

  //main return
  return (
    <div>
      <h1>Todo List App</h1>
      <FormComponent
        {...todo}
        handleFormOnChange={handleFormOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <TodosContainer
        todosList={todosList}
        handleTodoCheck={handleTodoCheck}
        handleTodoDelete={handleTodoDelete}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}
