import React from 'react'
import { FooterContainer } from './styles'

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Made with ❤️ by{' '}
        <a
          href="https://github.com/mariosantosdev"
          target="_blank"
          rel="noreferrer"
        >
          Mário Santos
        </a>
      </p>
    </FooterContainer>
  )
}
