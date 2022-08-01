import { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Footer from "./component/Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./component/Shared/Header/Header";
import Login from "./component/Authentication/Login/Login";
import Register from "./component/Authentication/Register/Register";
import Profile from "./Dashboard/Profile/Profile";
import { clear } from "@testing-library/user-event/dist/clear";
import PostArticle from "./Dashboard/PostArticle/PostArticle";
import ArticleDetails from "./component/ArticleDetails/ArticleDetails";
import auth from "./firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Contact from "./component/Contact/Contact";

const articleDataContext = createContext();
function App() {

  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [users, setUsers] = useState([]);
  const [signedInUser, setSignedInUser] = useState(null);
  const [authUser] = useAuthState(auth);
  useEffect(() => {
    AOS.init();
  }, []);

  // making theme dark
  const [dark, setDark] = useState(false);
  // localStorage.setItem('theme', dark);
  useEffect(() => {
    fetch("https://floating-ocean-13139.herokuapp.com/theme")
      .then((res) => res.json())
      .then((data) => {
        setDark(data[0].theme);
      });
  }, []);

  const setTheme = () => {
    fetch(
      "https://floating-ocean-13139.herokuapp.com/theme/62d829c706b5a80f8247a020",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          theme: !dark,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDark(!dark);
      });
  };

  // fetching all articles
  useEffect(() => {
    fetch("https://floating-ocean-13139.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  // fetching all users
  useEffect(() => {
    fetch("https://floating-ocean-13139.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const valueObj = {
    articles,
    searchValue,
    setArticles,
    setSearchValue,
    users,
    signedInUser,
    setSignedInUser,
  };

  const compareUser = useMemo(() => {
    return users?.find(user => user?.userInfo?.email === authUser?.email)
  }, [authUser, users])

  // console.log(compareUser)
  useEffect(() => {
    setSignedInUser(compareUser)
  }, [compareUser])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <articleDataContext.Provider value={valueObj}>
        <Header setDark={setDark} dark={dark} setTheme={setTheme}></Header>
        <Routes preserverScrollPosition={false}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/post-article" element={<PostArticle />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/article/:articleId"
            element={<ArticleDetails />}
          ></Route>
        </Routes>
        <Footer />
      </articleDataContext.Provider>
    </div>
  );
}

export default App;
export { articleDataContext };
