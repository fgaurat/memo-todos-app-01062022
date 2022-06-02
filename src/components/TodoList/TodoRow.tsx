import React from 'react'
import { Todo } from '../../core/Todo'



interface TodoRowProps{
    todo:Todo
}

function TodoRow({todo}:TodoRowProps) {
  console.log("TodoRow render")
  return (
    <tr >
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td>{todo.completed?"True":"False"}</td>
    <td><button className="btn btn-danger">delete</button></td>
</tr>
  )
}


export default React.memo(TodoRow)
// export default TodoRow