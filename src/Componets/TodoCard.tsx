//this componet will contain
//1 a vody for the title of the todo message
// a button for deletingthis todo entry
//a button to edit this todo entry
// a checkbox that will be used to check the entry if completed

import type { TodoCardFunctions } from "./TodoApp";

export default function TodoCard({
  id,
  checked,
  title,
  handleToCheck,
  handleTodoDelete,
  handleEditTodo,
}: TodoCardFunctions) {
  return (
    <div>
      <input
        type="checkbox"
        name="checked"
        id={`checked-${id}`}
        checked={checked}
        onChange={(e) => handleToCheck(e, id)}
      />
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => handleEditTodo(id)}>Edit</button>
      <button onClick={() => handleTodoDelete(id)}>Delete</button>
    </div>
  );
}
