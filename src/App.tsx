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

  const EnhancedComponent = HOCCompletedTodoList(TodoList);




  useEffect(() => {

    ( async () =>{
      const data = await dao.findAll()
      setData(data)
  
    })()
  }, [])
  


  return (
    <div className="container-fluid">
        <EnhancedComponent todos={data}></EnhancedComponent>
    </div>
  );
}

export default App;
