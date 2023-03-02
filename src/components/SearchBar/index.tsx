import React, { useState } from 'react'
import { usePosts } from '~/contexts/PostsContext'
import { Container, Header, SearchInput, Wrapper } from './styles'

export const SearchBar: React.FC = () => {
  const { posts, fetchPosts } = usePosts()
  const [query, setQuery] = useState('')

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetchPosts(query)
  }

  return (
    <Wrapper>
      <Container onSubmit={handleSearch}>
        <Header>
          <label htmlFor="search-input">Publicações</label>

          <span>{posts.length} publicações</span>
        </Header>

        <SearchInput
          id="search-input"
          type="text"
          placeholder="Buscar conteúdo"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Container>
    </Wrapper>
  )
}
