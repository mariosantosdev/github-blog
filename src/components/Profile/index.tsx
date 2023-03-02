import React, { useEffect, useState } from 'react'
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { api } from '~/services/api'
import {
  Container,
  Content,
  Description,
  Footer,
  FooterItem,
  Header,
  Wrapper,
} from './styles'

type ProfileType = {
  user: string
  name: string
  avatarUrl: string
  url: string
  bio: string
  followers: number
  company: string
}

type ProfileReponseAPI = {
  login: string
  name: string
  avatar_url: string
  url: string
  company: string
  bio: string
  followers: number
}

export const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileType>({
    user: 'mariosantosdev',
    name: 'Mário Santos',
    avatarUrl: 'https://github.com/mariosantosdev.png',
    url: 'https://github.com/mariosantosdev',
    bio: '',
    followers: 0,
    company: 'Nenhuma',
  })

  useEffect(() => {
    async function fetchProfile() {
      const { data } = await api.get<ProfileReponseAPI>('/users/mariosantosdev')

      setProfile((prev) => ({
        ...prev,
        ...data,
        avatarUrl: data.avatar_url,
        user: data.login,
      }))
    }

    fetchProfile()
  }, [])

  return (
    <Wrapper>
      <Container>
        <img src="https://github.com/mariosantosdev.png" alt="Foto do perfil" />

        <Content>
          <Header>
            <h1>{profile.name}</h1>

            <a
              href="https://github.com/mariosantosdev"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <FaExternalLinkAlt size={12} />
            </a>
          </Header>

          <Description>{profile.bio}</Description>

          <Footer>
            <FooterItem>
              <FaGithub />
              <span>{profile.user}</span>
            </FooterItem>

            <FooterItem>
              <FaBuilding />
              <span>{profile.company}</span>
            </FooterItem>

            <FooterItem>
              <FaUserFriends />
              <span>{profile.followers} seguidores</span>
            </FooterItem>
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  )
}
