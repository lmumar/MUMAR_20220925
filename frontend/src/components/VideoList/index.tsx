import React, { useEffect, useState } from 'react'
import VideoCard from '../VideoCard'

export default function VideoList() {
  const [videos, setVideos] = useState<VideoEntity[]>([])

  useEffect(() => {
    async function getVideos() {
      const response = await fetch('api/videos')
      const data = await response.json()
      setVideos(data)
    }
    getVideos()
  }, [])

  return (
    <div className="container max-w-7xl flex items-center mx-auto mt-5">
      <div className="grid grid-flow-row grid-cols-4">
        {videos.map((video: VideoEntity) => <VideoCard video={video} key={video.id} />)}
      </div>
    </div>
  )
}
