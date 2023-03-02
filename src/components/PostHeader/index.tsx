import React from 'react'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Container, Footer, FooterItem, Header, Title } from './styles'

export const PostHeader: React.FC = () => {
  return (
    <Container>
      <Header>
        <NavLink to="/">
          <FaChevronLeft />
          Voltar
        </NavLink>

        <a
          href="https://github.com/mariosantosdev"
          target="_blank"
          rel="noreferrer"
        >
          VER NO GITHUB <FaExternalLinkAlt size={12} />
        </a>
      </Header>

      <Title>JavaScript data types and data structures</Title>

      <Footer>
        <FooterItem>
          <FaGithub />
          <span>mariosantosdev</span>
        </FooterItem>

        <FooterItem>
          <FaCalendarDay />
          <span>Há 1 dia</span>
        </FooterItem>

        <FooterItem>
          <FaComment />
          <span>5 comentários</span>
        </FooterItem>
      </Footer>
    </Container>
  )
}
