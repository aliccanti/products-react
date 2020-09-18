import React from 'react';
import Header from './components/Header/Header.js';
import api from './services/api';
import Main from './pages/main';

import './styles.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Main />
    </div>
  );
}

export default App;
