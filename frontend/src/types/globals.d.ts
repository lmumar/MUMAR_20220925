interface Window {
}

interface Playable {
  id: number
  title: string
  category: string
  video_url: string
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}
