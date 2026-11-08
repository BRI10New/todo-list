//this componet will contain
//1 a vody for the title of the todo message
// a button for deletingthis todo entry
//a button to edit this todo entry
// a checkbox that will be used to check the entry if completed

import type {TodoCardProrps} from "./TodoApp";

export default function TodoCard({checked, title}) {
    return <div>
<input type="checkbox" name="checked" id="checked" checked={checked} />
<span>{title}</span>
<button>Delete </button>
<button>Edit</button>
</div>
}