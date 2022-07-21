import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Footer from './component/Shared/Footer/Footer';
import Header from './component/Shared/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const [dark, setDark] = useState(false)
  // localStorage.setItem('theme', dark);
  useEffect(() => {
    fetch('https://floating-ocean-13139.herokuapp.com/theme')
      .then(res => res.json())
      .then(data => {
        setDark(data[0].theme)
      }
      )
  }, [])

  const setTheme = () => {
    fetch('https://floating-ocean-13139.herokuapp.com/theme/62d829c706b5a80f8247a020', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        theme: !dark
      })
    })
      .then(res => res.json())
      .then(data => {
        setDark(!dark)
      }
      )

  }

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Header setDark={setDark} dark={dark} setTheme={setTheme}></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
