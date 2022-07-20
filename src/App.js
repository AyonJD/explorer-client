import { useState } from 'react';
import './App.css';
import Header from './component/Shared/Header';

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Header  setDark={setDark} dark={dark}></Header>
      
    </div>
  );
}

export default App;
