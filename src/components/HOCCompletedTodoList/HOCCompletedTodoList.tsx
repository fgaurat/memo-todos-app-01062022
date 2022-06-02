import React from 'react'
import { Todo } from '../../core/Todo'
import { TodoListProps } from '../TodoList/TodoList'




function HOCCompletedTodoList(TodoList:any) {


  return ({todos}:TodoListProps) =>{
    const completedTodos = todos.filter( (todo:Todo) => todo.completed)
    return <TodoList todos={completedTodos}/>
  }
}

export default HOCCompletedTodoList