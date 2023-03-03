import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'

const Footer = () => {
  return (
    <div>
      
<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <Link to="/" class="flex items-center mb-4 sm:mb-0">
            <img src={logo} class="h-8 mr-3" alt="Rhythm Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rhythm</span>
        </Link>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link to={'/about'} class="mr-4 hover:underline md:mr-6 font-bold text-xl">About</Link>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="text-xl font-bold block text-gray-500 sm:text-center dark:text-gray-400">© <Link to={'/'} class="hover:underline">Rhythm™</Link>. All Rights Reserved.
    </span>
</footer>

    </div>
  );
}

export default Footer;
