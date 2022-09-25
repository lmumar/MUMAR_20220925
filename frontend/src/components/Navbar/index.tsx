import React from 'react'
import { Link } from 'react-router-dom'
import t from '../../locales'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-b-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          to='/'
          className="flex items-center"
        >
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Casmedia</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                to='videos/add'
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                {t('upload')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}