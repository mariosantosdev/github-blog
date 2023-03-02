import React from 'react'
import { Container, Header, SearchInput, Wrapper } from './styles'

export const SearchBar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <label htmlFor="search-input">Publicações</label>

          <span>6 publicações</span>
        </Header>

        <SearchInput
          id="search-input"
          type="text"
          placeholder="Buscar conteúdo"
        />
      </Container>
    </Wrapper>
  )
}
