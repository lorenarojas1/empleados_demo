/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header: React.FC = () => {
  return (
<nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://brandfactory.company/" className="flex items-center">
      <img src="data:image/png;base64,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" className="h-8 mr-3" alt="Flowbite Logo"/>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Header;