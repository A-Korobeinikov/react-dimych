import React from 'react'
import './App.css';
import Header from './components//Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Friends from './components/Navbar/Sidebar/Friends/Friends';

const  App = (props) => {
  debugger
  return (
   <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content '>
        <Routes>
          <Route path="/dialogs/*" element = { <Dialogs store={props.store} />} />
          <Route path="/profile" element = { <Profile 
              profilePage = {props.state.profilePage}  
              dispatch={props.dispatch} />}/>
          
          <Route path="/news" element={<News/>}/>

          
        </Routes>
      </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
