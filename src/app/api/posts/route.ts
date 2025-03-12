export async function GET() {
    const posts = [
        { id: 1, page: 'first-post', title: 'First Post' },
        { id: 2, page: 'second-post', title: 'Second Post' },
        { id: 3, page: 'third-post', title: 'Third Post' },
      ]
  
    return new Response(JSON.stringify(posts), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
  