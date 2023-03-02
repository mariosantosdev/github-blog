import styled from 'styled-components'

export const Content = styled.main`
  padding: 0 1rem;
  width: 100vw;
`

export const PostsList = styled.section`
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;

  @media (max-width: 47rem) {
    margin-top: 2rem;
    gap: 1.5rem;
    grid-template-columns: 1fr;
  }
`
