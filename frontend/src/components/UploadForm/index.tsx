import React from 'react'
import t from '../../locales'

export default function UploadForm() {
  return (
    <div className="max-w-sm mx-auto border p-10 rounded-lg mt-10 bg-white">
      <form>
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
            {t('title')}
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 ">
            {t('categories')}
          </label>
          <select
            className="text-sm font-medium text-gray-900 block border border-gray-300 rounded-lg p-2.5 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:border-blue-500"
          >
            <option>Education</option>
            <option>Recipe</option>
            <option>Menu</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
            {t('selectFileTitle')}
          </label>
          <input
            type="file"
            className="border border-gray-300 rounded-lg text-sm bg-gray-50"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {t('submit')}
        </button>
      </form>
    </div>
  )
}