import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';

function App() {

  const data =[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }    
  ]
  return (
    <div className="container-fluid">
        <TodoList todos={data}></TodoList>
    </div>
  );
}

export default App;
