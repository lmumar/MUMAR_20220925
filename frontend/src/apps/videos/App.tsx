import React from 'react'
import { useRoutes} from 'react-router-dom'

import MainLayout from '../../components/MainLayout'

export default function App() {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'videos/add',
        element: <div />
      }
    ]
  }
  const routing = useRoutes([mainRoutes])
  return <>{routing}</>
}
