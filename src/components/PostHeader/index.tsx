import React from 'react'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { formatAgoDate } from '~/utils/formatter'
import { Container, Footer, FooterItem, Header, Title } from './styles'

interface PostHeaderProps {
  title: string
  url: string
  comments: number
  owner: string
  ownerProfile: string
  createdAt: string
}

export const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  url,
  comments,
  owner,
  ownerProfile,
  createdAt,
}) => {
  return (
    <Container>
      <Header>
        <NavLink to="/">
          <FaChevronLeft />
          Voltar
        </NavLink>

        <a href={url} target="_blank" rel="noreferrer">
          VER NO GITHUB <FaExternalLinkAlt size={12} />
        </a>
      </Header>

      <Title>{title}</Title>

      <Footer>
        <FooterItem as={NavLink} to={ownerProfile} target="_blank">
          <FaGithub />
          <span>{owner}</span>
        </FooterItem>

        <FooterItem>
          <FaCalendarDay />
          <span>{formatAgoDate(createdAt)}</span>
        </FooterItem>

        <FooterItem>
          <FaComment />
          <span>{comments} comentários</span>
        </FooterItem>
      </Footer>
    </Container>
  )
}
