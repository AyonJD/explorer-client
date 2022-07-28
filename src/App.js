import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Footer from './component/Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './component/Shared/Header/Header';
import Login from './component/Authentication/Login/Login';
import Register from './component/Authentication/Register/Register';
import Profile from './Dashboard/Profile/Profile';
import { clear } from '@testing-library/user-event/dist/clear';
import PostArticle from './Dashboard/PostArticle/PostArticle';

const articleDataContext = createContext()
function App() {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [users, setUsers] = useState([]);
  const [signedInUser, setSignedInUser] = useState(null);
  useEffect(() => {
    AOS.init();
  }, [])

  // making theme dark
  const [dark, setDark] = useState(false)

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

  // fetching all articles
  useEffect(() => {
    fetch('https://floating-ocean-13139.herokuapp.com/blogs')
      .then(res => res.json())
      .then(data => setArticles(data))
  }, [])

  // fetching all users
  useEffect(() => {
    fetch('https://floating-ocean-13139.herokuapp.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }
    , [])

  // console.log(users);
  const valueObj = {
    articles,
    searchValue,
    setArticles,
    setSearchValue,
    users,
    setSignedInUser
  }
  console.log(valueObj)

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <articleDataContext.Provider value={valueObj}>
        <Header setDark={setDark} dark={dark} setTheme={setTheme}></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/post-article' element={<PostArticle />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/post-article' element={<PostArticle />}></Route>
        </Routes>
        <Footer />
      </articleDataContext.Provider>
    </div>
  );
}

export default App;
export { articleDataContext }

