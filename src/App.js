import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Shared/Header';

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Header  setDark={setDark} dark={dark}></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
