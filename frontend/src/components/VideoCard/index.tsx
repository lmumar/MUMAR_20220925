import React from 'react'

export default function VideoCard() {
  return (
    <div className="max-w-[280px] bg-black rounded-lg border border-black shadow-md m-3 text-white">
      <div className="border w-[256px] mx-auto mt-3 rounded-lg border-black">
        <video
          poster="https://flowbite.com/docs/images/blog/image-1.jpg"
          src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_640_3MG.mp4"
          className="w-[256px] rounded-lg border-black"
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">Beautiful Earth</h5>
        <p className="mb-3 font-normal text-gray-400">Education</p>
      </div>
    </div>
  )
}
