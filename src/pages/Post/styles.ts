import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const Container = styled.div`
  padding: 0 1rem;
  width: 100vw;
`

export const Content = styled(ReactMarkdown)`
  margin: 0 auto;
  max-width: 54rem;
  width: 100%;
  margin-top: 3rem;

  p {
    margin: 1rem 0;

    & > * {
      display: block;
    }
  }

  a {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  pre {
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;
  }

  @media (max-width: 47rem) {
    margin-top: 2rem;
  }
`
