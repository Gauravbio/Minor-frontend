import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import {FcAbout} from 'react-icons/fc'
import { RxCross1 } from "react-icons/rx";
import { NavLink,useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import {useDispatch, useSelector} from 'react-redux'
import { logout } from "../actions/user";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const {isAuthenticated}=useSelector((state)=> state.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const logoutHandler=()=> {
    dispatch(logout())
    setMenu(false);
    navigate('/login')
  
  }
  const navNavLinkStyle = ({isActive}) => {
    return{
    textDecoration: isActive ? "none" :"",
    backgroundColor: isActive ? "Green" : "white",
    // fontSize :"30px"
   };
  };
  return (
    <div>
      <nav className="w-screen fixed p-3 border-gray-200 rounded bg-black">
        <div className="flex items-center justify-center ">
        <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg "
          >
            {menu ? (
              <RxCross1 className="w-6 h-6" onClick={() => setMenu(false)} />
            ) : (
              <GiHamburgerMenu
                className="w-6 h-6"
                onClick={() => setMenu(true)}
              />
            )}
          </button>
          <NavLink to={"/"} className="flex items-center mx-auto">
            <img
              src={logo}
              className="h-6 mr-3 sm:h-10 rounded-full"
              alt="logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Rhythm
            </span>
          </NavLink>
          
          
        </div>
      </nav>

      {menu && (
        <aside className="absolute w-64 z-10 mt-5" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2">
              <li>
                <NavLink style={navNavLinkStyle}
                  to={'/dashboard'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="ml-3">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink style={navNavLinkStyle}
                  to={'/'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="ml-3">Home</span>
                </NavLink>
              </li>

              <li>
                <NavLink style={navNavLinkStyle}
                  to={'/about'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                </NavLink>
              </li>

              <li>
                <NavLink style={navNavLinkStyle}
                  to={'/search'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
                </NavLink>
              </li>

              <li> 
                <NavLink style={navNavLinkStyle}
                  to={'/library'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Library</span>
                </NavLink>
              </li>

              {
                isAuthenticated?(
                  <li>
                    <NavLink style={navNavLinkStyle}
                      to={'/login'}
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={logoutHandler}
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                    </NavLink>
                  </li>
                ):
                (
                  <>
                    <li>
                      <NavLink style={navNavLinkStyle}
                        to={'/login'}
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={()=> setMenu(false)}
                      >
                        <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={navNavLinkStyle}
                        to={'/signup'}
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={()=> setMenu(false)}
                      >
                        <span className="flex-1 ml-3 whitespace-nowrap">Signup</span>
                      </NavLink>
                    </li>
                </>
                )
              }
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
