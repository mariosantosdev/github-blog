import React from 'react'
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import {
  Container,
  Content,
  Description,
  Footer,
  FooterItem,
  Header,
  Wrapper,
} from './styles'

export const Profile: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <img src="https://github.com/mariosantosdev.png" alt="Foto do perfil" />

        <Content>
          <Header>
            <h1>Mário Santos</h1>

            <a
              href="https://github.com/mariosantosdev"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <FaExternalLinkAlt size={12} />
            </a>
          </Header>

          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
            voluptatum quas natus quidem. Quisquam, quae. Quisquam, quae.
            Quisquam,
          </Description>

          <Footer>
            <FooterItem>
              <FaGithub />
              <span>mariosantosdev</span>
            </FooterItem>

            <FooterItem>
              <FaBuilding />
              <span>Osten Moove</span>
            </FooterItem>

            <FooterItem>
              <FaUserFriends />
              <span>32 seguidores</span>
            </FooterItem>
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  )
}
