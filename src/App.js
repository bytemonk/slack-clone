import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useStateValue} from "./dataProvider/StateProvider"
function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      
      <Router>
        {!user ? (
          <Login/>
        ) : (
        
        <>
        <Header />

        <div className="app__body">  
          <Sidebar />

          <Routes>

            <Route exact path="/room/:roomId" element={<Chat/>} >Chat</Route>
            <Route exact path="/" element={<h1>Welcome</h1>}>Welcome</Route>

          </Routes>

              </div>
            </>
            )}
      </Router>
      </div>
  );
}

export default App;
