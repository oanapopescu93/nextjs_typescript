import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const posts = [
    { id: 1, page: 'first-post', title: 'First Post' },
    { id: 2, page: 'second-post', title: 'Second Post' },
    { id: 3, page: 'third-post', title: 'Third Post' },
  ]

  // Find the post by the `slug` (page)
  const post = posts.find((post) => post.page === params.slug)

  if (!post) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 })
  }

  return NextResponse.json(post)
}