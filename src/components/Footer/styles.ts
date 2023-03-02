import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 1.5rem 0;
  p {
    color: ${({ theme }) => theme.colors['base-text']};
    a {
      color: ${({ theme }) => theme.colors['brand-blue']};
      text-decoration: none;
    }
  }
`
