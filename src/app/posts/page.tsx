'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PostsPage from '../pages/PostsPage'

export default function PostsRoute() {
  const [posts, setPosts] = useState<{ id: number; page: string; title: string }[]>([])
  const router = useRouter()
  
  const handlePostClick = (id: number) => {    
    router.push(`/posts/${id}`)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return <PostsPage posts={posts} onPostClick={handlePostClick} />
}
