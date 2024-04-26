import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { ContextAuth } from '../../provider/Provider';
import userProfile from '../../assets/profile-blanck.png';

const Nav = () => {
  // Theme funtionality
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const { userDta } = useContext(ContextAuth);
  const [viewProfile, setViewProfile] = useState(false);
  const [view, setView] = useState(false);
  const [hover, setHover] = useState(false);

  // console.log(hover);
  return (
    <div className="">
      <div className="w-11/12 mx-auto max-w-[1700px]">
        <div className=" navbar flex items-center flex-col sm:flex-row sm:justify-between">
          <div className="navbar-start flex items-center flex-row-reverse justify-between w-full sm:w-auto sm:flex-row">
            <div className="flex items-center">
              <div className="sm:hidden">
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onChange={handleTheme}
                    checked={theme === 'light' ? false : true}
                    className="theme-controller"
                    value="synthwave"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              {userDta ? (
                <div className="navbar-end flex sm:hidden gap-4 w-auto">
                  <img
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    onClick={() => setViewProfile(!viewProfile)}
                    src={userDta.photoURL}
                    className="border-2 border-redLi rounded-full h-12 w-12 cursor-pointer p-[2px]"
                    alt=""
                  />
                  {hover && (
                    <p className="text-redLi rounded-md absolute top-16 lg:top-[70px] right-14 lg:right-20 bg-slate-100 border-redLi border px-3 py-1">
                      {userDta.displayName}
                    </p>
                  )}
                  <div
                    className={`absolute top-16 lg:top-20 right-8 duration-3000 transition-transform ${
                      viewProfile
                        ? 'translate-x-0 visible'
                        : 'translate-x-96 invisible'
                    }`}
                  >
                    <div className="relative">
                      <div
                        className="text-white absolute text-2xl top-3 left-3 border rounded cursor-pointer hover:border-redLi duration-150"
                        onClick={() => setViewProfile(!viewProfile)}
                      >
                        <IoMdClose />
                      </div>
                      <ProfileMenu />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative dropdown">
                  <div
                    onClick={() => setView(!view)}
                    role="button"
                    className="btn btn-ghost text-redLi lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 rotate-180 sm:rotate-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  {view && (
                    <ul className="navManu absolute mt-1 sm:mt-3 -ml-40 sm:ml-4 z-10 p-2 shadow rounded-box w-52 border-2 border-solid border-redLi bg-slate-800 text-white flex flex-col lg:hidden">
                      <div
                        onClick={() => setView(!view)}
                        className="sm:hidden cursor-pointer text-redLi text-3xl -translate-x-9 translate-y-1/2 top-[calc(50%-20px)] absolute"
                      >
                        <IoIosArrowForward />
                      </div>
                      <div
                        style={{ borderRadius: '0 10px 0 0' }}
                        onClick={() => setView(!view)}
                        className="hidden sm:block cursor-pointer  text-redLi text-3xl -top-4  right-0 translate-y-1/2 absolute bg-redLi"
                      >
                        <span className="text-white">
                          <IoMdClose />
                        </span>
                      </div>
                      <NavLink
                        to={'/'}
                        className="hover:bg-slate-300 hover:text-redLi py-1 px-4 rounded"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={'/about'}
                        className="hover:bg-slate-300 hover:text-redLi py-1 px-4 rounded"
                      >
                        About
                      </NavLink>
                      <NavLink
                        to={'/blog'}
                        className="hover:bg-slate-300 hover:text-redLi py-1 px-4 rounded"
                      >
                        Blog
                      </NavLink>
                      <NavLink
                        to={'/contact'}
                        className="hover:bg-slate-300 hover:text-redLi py-1 px-4 rounded"
                      >
                        Contact
                      </NavLink>
                      <div className="flex sm:hidden flex-col gap-2 mt-2">
                        <Link
                          to={'/login'}
                          className="font-semibold hover:bg-redLi hover:text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md border-2 border-white text-white active:scale-90 duration-150"
                        >
                          Login
                        </Link>
                        <Link
                          to={'/register'}
                          className="font-semibold bg-redLi hover:bg-white hover:text-redLi text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md active:scale-90 duration-150"
                        >
                          Register
                        </Link>
                      </div>
                    </ul>
                  )}
                </div>
              )}
            </div>
            <Link to={'/'} className="text-3xl font-extrabold">
              <img className="h-12 lg:h-[60px]" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="navManu menu menu-horizontal px-1 flex gap-6 text-white">
              <NavLink
                to={'/'}
                className="w-28 py-3 text-center font-semibold hover:bg-white hover:text-redLi bg-[#ffffff0c] rounded-md border hover:border-redLi"
              >
                Home
              </NavLink>
              <NavLink
                to={'/about'}
                className="w-28 py-3 text-center font-semibold hover:bg-white hover:text-redLi bg-[#ffffff0c] rounded-md border hover:border-redLi"
              >
                About
              </NavLink>
              <NavLink
                to={'/blog'}
                className="w-28 py-3 text-center font-semibold hover:bg-white hover:text-redLi bg-[#ffffff0c] rounded-md border hover:border-redLi"
              >
                Blog
              </NavLink>
              <NavLink
                to={'/contact'}
                className="w-28 py-3 text-center font-semibold hover:bg-white hover:text-redLi bg-[#ffffff0c] rounded-md border hover:border-redLi"
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-3 w-40">
            <div className="hidden sm:block">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={handleTheme}
                  checked={theme === 'light' ? false : true}
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            {userDta ? (
              <div className="  hidden sm:flex gap-4">
                <img
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)}
                  onClick={() => setViewProfile(!viewProfile)}
                  src={userDta.photoURL ? userDta.photoURL : userProfile}
                  className="border-2 border-redLi rounded-full h-12 w-12 cursor-pointer p-[2px]"
                  alt=""
                />
                {hover && (
                  <div className=" rounded-md absolute top-16 lg:top-[70px] right-14 lg:right-20 bg-slate-100 border-redLi border px-3 py-1">
                    <div
                      className="bg-redLi h-2 w-3 absolute right-1 -top-2 hidden sm:block"
                      style={{ clipPath: 'polygon(50% 0, 0% 100%, 100% 100%)' }}
                    ></div>
                    <p className="text-redLi">{userDta.displayName}</p>
                  </div>
                )}
                <div
                  className={`absolute top-16 lg:top-20 right-16 duration-3000 transition-transform ${
                    viewProfile
                      ? 'translate-x-0 visible'
                      : 'translate-x-96 invisible'
                  }`}
                >
                  <div className="relative">
                    <div
                      className="text-white absolute text-2xl top-3 left-3 border rounded cursor-pointer hover:border-redLi duration-150"
                      onClick={() => setViewProfile(!viewProfile)}
                    >
                      <IoMdClose />
                    </div>
                    <ProfileMenu />
                  </div>
                </div>
              </div>
            ) : (
              <div className=" gap-4 hidden sm:flex">
                <Link
                  to={'/login'}
                  className="font-semibold bg-redLi hover:bg-white hover:text-redLi px-5 sm:px-8 py-2 sm:py-3 rounded-md  active:scale-90 duration-150 text-white"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
