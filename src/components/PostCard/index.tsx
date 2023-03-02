import React from 'react'
import { formatAgoDate } from '~/utils/formatter'
import { Container, Content, Header } from './styles'

interface PostCardProps {
  id: number
  title: string
  body: string
  createdAt: string
}

export const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  createdAt,
  body,
}) => {
  return (
    <Container to={`/post/${id}`}>
      <Header>
        <h2>{title}</h2>
        <time>{formatAgoDate(createdAt)}</time>
      </Header>

      <Content>{body}</Content>
    </Container>
  )
}
