import React from 'react'
import { Todo } from '../../core/Todo'

interface TodoListProps{
    todos:Todo[]
}


function TodoList({todos}:TodoListProps) {

  return (
    <>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>completed</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {todos.map( (todo:Todo) =>
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed}</td>
                    <td></td>
                </tr>
                )}

            </tbody>
        </table>
    </>
  )
}

export default TodoList