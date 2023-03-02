import { Fragment } from 'react'
import { PostCard } from '~/components/PostCard'
import { Profile } from '~/components/Profile'
import { SearchBar } from '~/components/SearchBar'

import { Content, PostsList } from './styles'

export function BlogPage() {
  return (
    <Fragment>
      <Profile />

      <SearchBar />

      <Content>
        <PostsList>
          <PostCard id={1} />
          <PostCard id={2} />
          <PostCard id={3} />
          <PostCard id={4} />
          <PostCard id={5} />
          <PostCard id={6} />
        </PostsList>
      </Content>
    </Fragment>
  )
}
