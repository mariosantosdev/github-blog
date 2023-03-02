import React, { createContext, useCallback, useEffect } from 'react'
import { api } from '~/services/api'

type Post = {
  id: number
  issueNumber: number
  labels: string[]
  title: string
  body: string
  url: string
  comments: number
  owner: string
  ownerProfile: string
  createdAt: string
}

type IssuesResponse = {
  id: number
  number: number
  labels: string[]
  title: string
  body: string
  html_url: string
  comments: number
  created_at: string
  user: {
    login: string
    html_url: string
  }
}

type PostsContextType = {
  posts: Post[]
  fetchPosts: (query: string) => Promise<void>
  getPostById: (issueNumber: number) => Promise<Post>
}

interface PostsProviderProps {
  children: React.ReactNode
}

export const PostsContext = createContext<PostsContextType>(
  {} as PostsContextType,
)

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = React.useState<Post[]>([])

  const getPostById = useCallback(
    async (issueId: number) => {
      return posts.filter((post) => post.id === issueId)[0]
    },
    [posts],
  )

  const fetchPosts = useCallback(async (query = '') => {
    const { data } = await api.get<IssuesResponse[]>(
      `/repos/mariosantosdev/github-blog/issues`,
      { params: { q: query } },
    )
    setPosts(
      data.map((issue) => ({
        ...issue,
        issueNumber: issue.number,
        url: issue.html_url,
        owner: issue.user.login,
        ownerProfile: issue.user.html_url,
        createdAt: issue.created_at,
      })),
    )
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts, getPostById }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => React.useContext(PostsContext)
