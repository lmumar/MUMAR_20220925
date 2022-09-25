import React from 'react'

type Props = {
  children: JSX.Element[]
}

export default function VideoList({ children } : Props) {
  return (
    <div className="container max-w-7xl flex items-center mx-auto mt-5">
      <div className="grid grid-flow-row grid-cols-4">
        {children}
      </div>
    </div>
  )
}
