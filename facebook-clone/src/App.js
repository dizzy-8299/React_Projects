import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import React from 'react'
import Feed from './components/Feed.js'
import Widgets from './components/Widgets.js';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user} , dispatch] = useStateValue();
  return (
    <div className="app">
        {!user ? (
          <Login/>
        ) : (
        <>
          <Header />
          <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
          </div>
        </>
        )}
        
    </div>
  );
}

export default App;
