import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import { PostHeader } from '~/components/PostHeader'
import { usePosts } from '~/contexts/PostsContext'
import { Container, Content } from './styles'

type TypePost = {
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

export function PostPage() {
  const postId = useParams().postId
  const [post, setPost] = useState({} as TypePost)
  const { getPostById } = usePosts()

  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = await getPostById(Number(postId))
      setPost(fetchedPost)
    }

    fetchPost()
  }, [getPostById, postId])

  return (
    <Container>
      <PostHeader {...post} />

      <Content rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>
        {post?.body}
      </Content>
    </Container>
  )
}
