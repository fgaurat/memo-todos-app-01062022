import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { Todo } from './core/Todo';
import { useEffect } from 'react';
import { domainToASCII } from 'url';

function App() {

  const [data,setData] = useState<Todo[]>([])

  useEffect(() => {
    const data = dao.findAll()
    setData(data)
  }, [])
  


  return (
    <div className="container-fluid">
        <TodoList todos={data}></TodoList>
    </div>
  );
}

export default App;
