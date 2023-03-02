import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled(NavLink)`
  color: ${({ theme }) => theme.colors['base-text']};
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;
  gap: 1.25rem;

  width: 100%;
  height: 16rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  time {
    color: ${({ theme }) => theme.colors['base-span']};
  }

  h2 {
    max-width: 70%;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
