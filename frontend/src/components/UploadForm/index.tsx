import React, {
  useState,
  useEffect
} from 'react'

import { csrfToken } from '../../utils/cookies'
import t from '../../locales'

enum UploadFormState {
  Ready,
  Saving,
  Saved,
  ValidationFailed,
  SavingFailed
}

type UploadFormReply =
  | ErrorReply
  | VideoEntity

const fileSizeMax = 200 * 1024 * 1024
function isFileSizeValid(file: File) {
  return file.size <= fileSizeMax
}

export default function UploadForm() {
  const [categories, setCategories] = useState<CategoryEntity[]>([])
  const [formState, setFormState] = useState(UploadFormState.Ready)
  const [errorDetails, setErrorDetails] = useState('')

  useEffect(() => {
    async function getCategories() {
      const response = await fetch('/api/categories')
      const data = await response.json()
      setCategories(data)
    }
    getCategories()
  }, [])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setFormState(UploadFormState.Saving)

    async function saveVideo(formData: FormData) {
      const token = csrfToken(document.cookie)

      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": token
        },
        body: formData
      })

      const reply: UploadFormReply = await response.json()
      if ('code' in reply) {
        setFormState(UploadFormState.SavingFailed)
        setErrorDetails(t('errorSavingVideoTip'))
        return
      }

      if ('id' in reply) {
        setFormState(UploadFormState.Saved)
        return
      }
    }

    const formData = new FormData(event.target)
    saveVideo(formData)
  }

  const handleFileChanged = (event: any) => {
    const file = event.target.files[0]
    if (file && !isFileSizeValid(file)) {
      setFormState(UploadFormState.ValidationFailed)
      setErrorDetails(t('fileSizeLimitExceeded'))
    } else {
      setFormState(UploadFormState.Ready)
      setErrorDetails('')
    }
  }

  return (
    <div className="max-w-sm mx-auto border p-10 rounded-lg mt-10 bg-white">
      {formState === UploadFormState.Saved && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
          <span className="font-medium">
            {t('videoSaved')}
          </span>
        </div>
      )}

      {(formState === UploadFormState.SavingFailed || formState === UploadFormState.ValidationFailed) && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
          <span className="font-medium">{t('errorSavingVideo')}</span> {errorDetails}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
            {t('title')}
          </label>
          <input
            name="video[title]"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">
            {t('category')}
          </label>
          <select
            name="video[category_id]"
            className="text-sm font-medium text-gray-900 block border border-gray-300 rounded-lg p-2.5 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:border-blue-500 w-full"
          >
            {categories.map(category =>
              <option value={category.id} key={category.code}>{category.name}</option>)
            }
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
            {t('selectFileTitle')}
          </label>
          <input
            name="video[clip]"
            type="file"
            className="border border-gray-300 rounded-lg text-sm bg-gray-50"
            accept="video/mp4, video/quicktime"
            onChange={handleFileChanged}
            required
          />
        </div>
        <button
          disabled={categories.length === 0 || formState === UploadFormState.ValidationFailed}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {t('submit')}
        </button>
      </form>
    </div>
  )
}