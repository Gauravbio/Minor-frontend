import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import {FcAbout} from 'react-icons/fc'
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jfif";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <nav className="p-3 border-gray-200 rounded bg-slate-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} className="flex items-center hover:bg-gray-100 ">
            <img
              src={logo}
              className="h-6 mr-3 sm:h-10 rounded-full"
              alt="logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Rhythm
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100"
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
        </div>
      </nav>

      {menu && (
        <aside className="absolute w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2">
              <li>
                <Link
                  to={'/dashboard'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  to={'/about'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                </Link>
              </li>

              <li>
                <Link
                  to={'/search'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
                </Link>
              </li>

              <li>
                <Link
                  to={'/library'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Library</span>
                </Link>
              </li>

              <li>
                <Link
                  to={'/login'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                </Link>
              </li>
              <li>
                <Link
                  to={'/signup'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
