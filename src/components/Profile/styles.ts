import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 1rem;
  width: 100vw;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  max-width: 54rem;
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -80px;

  padding: 2rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    border-radius: 8px;
    width: 9.25rem;
    height: 9.25rem;
  }

  @media (max-width: 47rem) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 9.25rem;

  @media (max-width: 47rem) {
    height: fit-content;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.colors['brand-blue']};
    font-weight: 700;
    font-size: 0.75rem;

    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors['brand-blue']};
    }
  }
`

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: auto;

  gap: 1.5rem;

  @media (max-width: 47rem) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    margin-top: 2rem;
  }
`

export const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};

  svg {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
