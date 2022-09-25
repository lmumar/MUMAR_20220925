interface Window {
}

interface VideoEntity {
  id: number
  title: string
  category: string
  video_url: string
}

interface CategoryEntity {
  id: number
  code: string
  name: string
}

interface ErrorReply {
  code: string
  details: any
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
