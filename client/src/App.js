import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import CardContainer from './components/CardContainer'
import Detail from './components/Detail'

const App = () => {

  return (
    <div>
      <div id="back"></div>
      <div id="title"><h1>Menu Storage</h1></div>
      <div className='top-container'>
        <Form />
        <Detail />
      </div>
      <div className='bottom-container'>
        <CardContainer />
      </div>
    </div>
  );
};

export default App;