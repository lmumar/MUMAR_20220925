import React from 'react'
import Navbar from '../Navbar'
import VideoCard from '../VideoCard'
import VideoList from '../VideoList'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <VideoList>
        {Array.from(Array(10).keys()).map(_k => (
          <VideoCard />
        ))}
      </VideoList>
    </>
  )
}
