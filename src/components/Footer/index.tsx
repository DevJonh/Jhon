import { FaPaintBrush } from 'react-icons/fa'

import React from 'react'
import * as Style from './styles'

type FooterProps = {
  children: React.ReactNode
  inverter: boolean
}

const Footer = ({ children, inverter }: FooterProps) => (
  <Style.Wrapper inverter={inverter} id="contact">
    <div>{children}</div>
    <Style.Copy inverter={inverter}>
      <p>
        Designer{' '}
        <a
          target="_blank"
          href="https://dribbble.com/giseleoliveira"
          rel="noreferrer"
        >
          Gisele Oliveira
        </a>{' '}
        <FaPaintBrush />
      </p>
      <p>
        Desenvolvido com <span>❤</span>
      </p>
    </Style.Copy>
  </Style.Wrapper>
)

export default Footer
