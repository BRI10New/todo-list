import { useState } from "react";

export interface TodoCardProps {
  id: string;
  title: string;
  checked: boolean;
}

export interface TodoContarinerProps {
  todosList: TodoCardProps[];
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

//main return
return <div>
    <h1>Todo List App</h1>
    <FormComponent {...todo} />
    <TodosContainer todosList={todosList} />
</div>
}