import './App.css';
import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  const [page, setPage] = useState('Home');
  return (
    <div className="app">
      <a className="skip-to-content-link" href="#main">
            Skip to content
        </a>
      <Header setPage={setPage}/>
      <Main page={page} setPage={setPage}/>
      <Footer/>
    </div>
  );
}

export default App;
