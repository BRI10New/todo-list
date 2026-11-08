//A form component that will have a text input for the todo title
//and a button to submit the todo
//later it will be used to edit the todo entry as well

export default function FormComponetn ({id, title}: TodoCardProps) {
    return <div>
        <form action ="">
            <label htmlFor="title">Todo Title</label>
            <input type="text" name="title" id="title" value={title} />
        </form>
    </div>
}