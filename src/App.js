import logo from './logo.svg';
import Con from './connho';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('phu');
  const [grade, setGrade] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>

      </header>
      <div className="moi">
        <Con myname ={name}/>
        <Con myname ={'phan tấn phú'}/>
        <p>tôi tên la {name}</p>
        <p>toi hoc lop {grade}</p>
        <button onClick={()=>setName('Tấn phú')}>đỏi tên</button>
        <button onClick={()=>setGrade(grade +1)}>đổi lớp</button>
        <h3>phu</h3>
        <img src="https://www.takadada.com/wp-content/uploads/2019/07/9-16.jpg"></img>
      </div>
    </div>
  );
}

export default App;

