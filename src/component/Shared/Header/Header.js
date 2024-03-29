import React, { useContext, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faBurger,
  faContactBook,
  faHeart,
  faHome,
  faList,
  faRightFromBracket,
  faStar,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlineDashboard } from "react-icons/md";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Search from "./Search";
import { articleDataContext } from "../../../App";
import TopNav from "./TopNav";
import MegaMenu from "./MegaMenu";

const Header = ({ setDark, dark, setTheme }) => {
  const { pathname } = useLocation();
  const valueObj = useContext(articleDataContext);
  const { setSignedInUser, users, signedInUser, articles } = valueObj;
  const [user] = useAuthState(auth);
  const [userImg, setUserImg] = useState("");
  const logout = () => {
    signOut(auth);
  };
  console.log(user);

  let userAuthor = valueObj?.signedInUser?.admin;

  //FIlter with useMemo users based on firebase user
  useEffect(() => {
    let filteredUsers = users?.filter(
      (userDB) => userDB?.userInfo?.email === user?.email
    );

    if (filteredUsers?.length > 0 && filteredUsers) {
      setSignedInUser(filteredUsers[0]);
    }
    setUserImg(user?.photoURL);
  }, [valueObj, users, setSignedInUser, signedInUser, user]);

  return (
    <>
      <TopNav />
      <div className="border-b z-50 sticky bg-base-100 top-0">
        <div className="mid-container main_nav_padding">
          <div className="sticky top-0 z-50 navbar-content navbar p-0 ">
            <div className="">
              <div className="dropdown dropdown-items">
                <label
                  tabIndex="0"
                  className="btn btn-sm btn-accent btn-square lg:hidden h-9 w-10 mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-info"
                >
                  <li className="mb-1">
                    <Link to="/">
                      <FontAwesomeIcon
                        className="icon text-secondary"
                        icon={faHome}
                      />{" "}
                      <span className="item">Home</span>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/all-article">
                      <FontAwesomeIcon
                        className="icon text-secondary"
                        icon={faHome}
                      />{" "}
                      <span className="item">All Articles</span>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/about">
                      <FontAwesomeIcon
                        className="icon text-secondary"
                        icon={faBurger}
                      />{" "}
                      <span className="item">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <FontAwesomeIcon
                        className="icon text-secondary"
                        icon={faContactBook}
                      />{" "}
                      <span className="item">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="navbar-start main_navbar_pd hidden lg:flex lg:w-[55%]">
              <ul className="menu menu-horizontal p-0">
                <li className="mr-1 hover:text-primary">
                  <Link to="/">Home</Link>
                </li>
                <li tabindex="0" className="mr-1 hover:text-primary">
                  <Link to="/all-article">All Articles</Link>
                  {/* <ul class="p-2 bg-base-100">
                                        <li>
                                            <>
                                                {
                                                    articles?.blogs?.map((article, index) => {
                                                        return (
                                                            <a key={index}>
                                                                <div>
                                                                    <img src={article?.img} alt="" />
                                                                </div>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </></li>
                                    </ul> */}
                </li>
                <li className="mr-1 hover:text-primary">
                  <Link to="/about">About</Link>
                </li>
                <li className="mr-2 hover:text-primary">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="navbar-end text-right ml-auto lg:w-[45%]">
              <Search />
              <label className="swap swap-rotate mx-2 dark-mode bg-accent hover:bg-primary">
                <input type="checkbox" onClick={() => setTheme()} />

                <svg
                  className="swap-on fill-current w-7 h-7 text-secondary dark-icon"
                  xmlns="http://www.w3.org/2000/svg "
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-off fill-current w-7 h-7 text-secondary dark-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

              <div className="lg:hidden">
                {pathname.includes("dashboard") && (
                  <label
                    htmlFor="my-drawer-2"
                    tabIndex="1"
                    className="btn btn-ghost "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </label>
                )}
              </div>

              {user ? (
                <>
                  <div className="dropdown dropdown-end dropdown-items">
                    <label tabIndex="1">
                      <div className="avatar p-2">
                        <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                          <img src={userImg} alt={user?.displayName} />
                        </div>
                      </div>
                    </label>
                    <ul
                      tabIndex="1"
                      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-info"
                    >
                      {userAuthor ? (
                        <>
                          <li className="mb-1">
                            <Link to="/user-profile">
                              <FontAwesomeIcon
                                className="icon text-secondary"
                                icon={faUserAlt}
                              />{" "}
                              <span className="item">Profile</span>
                            </Link>
                          </li>

                          <li className="mb-1">
                            <Link to="/dashboard/analytics">
                              <FontAwesomeIcon
                                className="icon text-secondary"
                                icon={faList}
                              />{" "}
                              <span className="item">Dashboard</span>
                            </Link>
                          </li>

                          {/* <li className='mb-1'><Link to='/dashboard/manage-article'><FontAwesomeIcon className='icon text-secondary' icon={faHeart} /> <span className='item'>Manage Article</span></Link></li> */}

                          <li>
                            <Link onClick={logout} to="/">
                              <FontAwesomeIcon
                                className="icon text-secondary "
                                icon={faRightFromBracket}
                              />{" "}
                              <span className="item">Log Out</span>
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="mb-1">
                            <Link to="/user-profile">
                              <FontAwesomeIcon
                                className="icon text-secondary"
                                icon={faUserAlt}
                              />{" "}
                              <span className="item">Profile</span>
                            </Link>
                          </li>

                          <li className="mb-1">
                            <Link to="/membership">
                              <FontAwesomeIcon
                                className="icon text-secondary"
                                icon={faList}
                              />{" "}
                              <span className="item">Get Premium</span>
                            </Link>
                          </li>

                          <li className="mb-1">
                            <Link to="/">
                              <FontAwesomeIcon
                                className="icon text-secondary"
                                icon={faHeart}
                              />{" "}
                              <span className="item">Setting</span>
                            </Link>
                          </li>

                          <li className="mb-1">
                            <Link to="/faq">
                              <FontAwesomeIcon
                                className="icon text-secondary "
                                icon={faStar}
                              />{" "}
                              <span className="item">FAQ</span>
                            </Link>
                          </li>

                          {/* <li className='mb-1'><Link to='/'><FontAwesomeIcon className='icon text-secondary ' icon={faArrowRightArrowLeft} /> <span className='item'>Bookmark</span></Link></li> */}

                          {/* <li className='mb-1'><Link to='/'><FontAwesomeIcon className='icon text-secondary ' icon={faArrowRightArrowLeft} /> <span className='item'>Notification</span></Link></li> */}

                          <li>
                            <Link onClick={logout} to="/">
                              <FontAwesomeIcon
                                className="icon text-secondary "
                                icon={faRightFromBracket}
                              />{" "}
                              <span className="item">Log Out</span>
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </>
              ) : (
                <Link to="/join">
                  <button className="btn btn-sm btn-success btn-outline">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
