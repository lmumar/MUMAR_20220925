import React, {
  useRef,
  useEffect,
  useState
} from 'react'

type Props = {
  video: VideoEntity
}

export default function VideoCard({ video } : Props) {
  const videoElement = useRef<HTMLVideoElement>(null)
  const [ isPlaying, setIsPlaying ] = useState(false)

  useEffect(() => {
    if (isPlaying)
      videoElement?.current?.play()
    else
      videoElement?.current?.pause()
  }, [isPlaying])

  const handleVideoClicked = () => setIsPlaying(!isPlaying)

  return (
    <div className="max-w-[280px] bg-black rounded-lg border border-black shadow-md m-3 text-white">
      <div className="border w-[256px] mx-auto mt-3 rounded-lg border-black">
        <video
          ref={videoElement}
          poster={`/video_thumbnails/${video.id}`}
          src={video.video_url}
          className="w-[256px] rounded-lg border-black cursor-pointer"
          onClick={handleVideoClicked}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {video.title}
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          {video.category}
        </p>
      </div>
    </div>
  )
}
