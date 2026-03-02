import React, { useState } from 'react';
import Form from './Components/Form';
import LogDummy from './Components/LogDummy';
import './App.css'

function App() {
  return (
    <div className="App">
      <LogDummy />
      <Form />
    </div>
  );
}

export default App;
