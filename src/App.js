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
import PostArticle from "./Dashboard/PostArticle/PostArticle";
import ArticleDetails from "./component/ArticleDetails/ArticleDetails";
import auth from "./firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import AllArticle from "./component/Article/AllArticle/AllArticle";
import Contact from "./component/Contact/Contact";
import { Toaster } from 'react-hot-toast';
import About from "./component/About/About";
import ScrollToTop from "./hooks/ScrollToTop";
import Dashboard from "./Dashboard/AdminDashboard/Dashboard";
import Overview from "./Dashboard/AdminDashboard/OverviewWebsite/Overview";
import ManageArticle from "./Dashboard/AdminDashboard/ManageArticle/ManageArticle";
import ManageUser from "./Dashboard/AdminDashboard/ManageUser/ManageUser";
import Analytics from "./Dashboard/AdminDashboard/Analytics/Analytics";
import AdminRules from "./Dashboard/AdminDashboard/Analytics/AdminRules";
import PremiumMember from "./Dashboard/AdminDashboard/PremiumMember/PremiumMember";

import UserProfile from "./Dashboard/AdminDashboard/UserProfile/UserProfile";
import UpdateUserProfile from "./Dashboard/AdminDashboard/UserProfile/UpdateUserProfile";

import GetPremium from "./Dashboard/UsersSection/GetPremium";
import PaymentCard from "./Dashboard/Payment/PaymentCard";
import SearchCategory from "./component/SearchCategory/SearchCategory";
import Faq from "./component/Faq/Faq";
import LoginSignupToggle from "./component/Authentication/LoginSignupToggle/LoginSignupToggle";



const articleDataContext = createContext();
function App() {

  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [users, setUsers] = useState([]);
  const [signedInUser, setSignedInUser] = useState(null);
  const [authUser] = useAuthState(auth);
  const [categoryArticle, setCategoryArticle] = useState([]);
  const [loader, setLoader] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [premiumMember, setPremiumMember] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  // making theme dark
  const [dark, setDark] = useState(false);
  // localStorage.setItem('theme', dark);
  useEffect(() => {
    fetch("http://localhost:5000/theme")
      .then((res) => res.json())
      .then((data) => {
        setDark(data[0].theme);
      });
  }, []);

  const setTheme = () => {
    fetch(
      "http://localhost:5000/theme/62d829c706b5a80f8247a020",
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
    // setLoader(true);
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoader(false);
      });
  }, []);

  // fetching all users
  useEffect(() => {
    // setLoader(true);
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setUsers(data);
      });
  }, []);

  //fetching all the premium users
  useEffect(() => {
    fetch("http://localhost:5000/purches")
      .then((res) => res.json())
      .then((data) => {
        setPremiumMember(data);
      }
      );
  }, []);

  useEffect(() => {
    premiumMember?.find((user) => {
      if (user?.buyer?.email === signedInUser?.email) {
        setTransactionId(user.transactionId);
      }
    }
    );
  })
  // console.log(signedInUser);
  // const transactionId = premiumMember?.find((user) => {
  //   if (user?.buyer?.email === signedInUser?.email) {
  //     return user.transactionId;

  //   }
  // })

  const valueObj = {
    articles,
    searchValue,
    setArticles,
    setSearchValue,
    users,
    signedInUser,
    setSignedInUser,
    dark,
    setCategoryArticle,
    categoryArticle,
    loader,
    transactionId,
    premiumMember,
  };

  const compareUser = useMemo(() => {
    return users?.find(user => user?.userInfo?.email === authUser?.email)
  }, [authUser, users])

  // console.log(compareUser)
  useEffect(() => {
    setSignedInUser(compareUser)
  }, [compareUser])

  // console.log(users);

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <ScrollToTop />
      <articleDataContext.Provider value={valueObj}>
        <Header setDark={setDark} dark={dark} setTheme={setTheme}></Header>
        <Routes preserverScrollPosition={false}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path="/updateUser" element={<UpdateUserProfile />}></Route>
          <Route path="/post-article" element={<PostArticle />}></Route>
          <Route path="/join" element={<LoginSignupToggle />}></Route>
          {/* <Route path="/register" element={<Register />}></Route> */}
          <Route path="/all-article" element={<AllArticle />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/search-category" element={<SearchCategory />}></Route>
          <Route path="/faq" element={<Faq />}></Route>

          {/* <Route path="/hudai" element={<Hudai />}></Route> */}

          <Route path="/membership" element={<GetPremium />}></Route>
          <Route path="/payment/:id" element={<PaymentCard />}></Route>


          <Route
            path="/article/:articleId"
            element={<ArticleDetails />}
          ></Route>

          <Route path="/article/:articleId" element={<ArticleDetails />}></Route>

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="post-Article" element={<PostArticle />} />
            <Route path="overview" element={<Overview />} />
            <Route path="manage-article" element={<ManageArticle />} />
            <Route path="manage-user" element={<ManageUser />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="admin-rules" element={<AdminRules />} />
            <Route path="premium-member" element={<PremiumMember />} />
          </Route>

        </Routes>
        <Footer />
      </articleDataContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;
export { articleDataContext };