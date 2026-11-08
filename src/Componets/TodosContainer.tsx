//This component will have a todo list as a prop
//then we will map into several TodoCards

import type {TodoCardProrps} from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({todosList}: TodosContainerProps) {
return <div>
    {todosList.length > 0 || "Todo list is empty"}
{todosList.map((todo) => (<TodoCard key={todo.id} {...todo} />))}
</div>

}