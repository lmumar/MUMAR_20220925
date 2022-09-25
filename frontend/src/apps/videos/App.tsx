import React from 'react'
import { useRoutes} from 'react-router-dom'

import MainLayout from '../../components/MainLayout'
import VideoList from '../../components/VideoList'
import VideoCard from '../../components/VideoCard'
import UploadForm from '../../components/UploadForm'

export default function App() {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <VideoList>
            {Array.from(Array(10).keys()).map(_k => (
              <VideoCard />
            ))}
          </VideoList>
        )
      },
      {
        path: 'videos/add',
        element: <UploadForm />
      }
    ]
  }
  const routing = useRoutes([mainRoutes])
  return <>{routing}</>
}
