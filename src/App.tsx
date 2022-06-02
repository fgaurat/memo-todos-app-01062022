import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { Todo } from './core/Todo';
import { useEffect } from 'react';
import { TodoDAO } from './core/TodoDAO';
import HOCCompletedTodoList from './components/HOCCompletedTodoList';

const dao = new TodoDAO()

function App() {

  const [data,setData] = useState<Todo[]>([])
  const [showCompleted,setShowCompleted] = useState<boolean>(false);
  
  
  const onShowCompleted = (event:React.FormEvent<HTMLInputElement>)=>{
    const isChecked = event.currentTarget.checked;
    setShowCompleted(isChecked)
  }

  useEffect(() => {

    ( async () =>{
      const data = await dao.findAll()
      setData(data)
  
    })()
  }, [])
  


  return (
    <div className="container-fluid">
      <h1>memo-todos-app</h1>
      completed ?<input type="checkbox" onChange={onShowCompleted} checked={showCompleted}/>

        <TodoList todos={data.filter( (todo:Todo) => showCompleted?todo.completed:true)}></TodoList>

    </div>
  );
}

export default App;
