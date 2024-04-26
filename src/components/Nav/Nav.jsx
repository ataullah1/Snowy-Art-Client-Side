import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/whiteLogo.png';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { ContextAuth } from '../../provider/Provider';
import userProfile from '../../assets/userProfile.png';

const Nav = () => {
  const { userDta } = useContext(ContextAuth);
  const [viewProfile, setViewProfile] = useState(false);
  const [view, setView] = useState(false);
  const [hover, setHover] = useState(false);

  // console.log(hover);
  return (
    <div>
      <div className="w-11/12 mx-auto max-w-[1700px]">
        <div className=" navbar flex items-center flex-col sm:flex-row sm:justify-between">
          <div className="navbar-start flex items-center flex-row-reverse justify-between w-full sm:w-auto sm:flex-row">
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
          {userDta ? (
            <div className=" navbar-end hidden sm:flex gap-4 w-28">
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
            <div className="navbar-end gap-4 hidden sm:flex w-28">
              {/* <Link
                to={'/login'}
                className="font-semibold bg-white text-redLi px-5 sm:px-8 py-2 sm:py-3 rounded-md active:scale-90 duration-150 hover: border-2 hover:border-redLi"
              >
                Login
              </Link> */}
              <Link
                to={'/login'}
                className="font-semibold bg-redLi hover:bg-white hover:text-redLi px-5 sm:px-8 py-2 sm:py-3 rounded-md  active:scale-90 duration-150 text-white"
              >
                Login
              </Link>
              {/* <Link
                to={'/register'}
                className="font-semibold bg-redLi hover:bg-white hover:text-redLi px-5 sm:px-8 py-2 sm:py-3 rounded-md  active:scale-90 duration-150 text-white"
              >
                Register
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
