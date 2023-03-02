import { Fragment } from 'react'
import { PostCard } from '~/components/PostCard'
import { Profile } from '~/components/Profile'
import { SearchBar } from '~/components/SearchBar'
import { usePosts } from '~/contexts/PostsContext'

import { Content, PostsList } from './styles'

export function BlogPage() {
  const { posts } = usePosts()
  return (
    <Fragment>
      <Profile />

      <SearchBar />

      <Content>
        <PostsList>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </PostsList>
      </Content>
    </Fragment>
  )
}
