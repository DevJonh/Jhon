import { FaPaintBrush } from 'react-icons/fa'

import React from 'react'
import * as Style from './styles'

const Footer: React.FC = ({ children }) => (
  <Style.Wrapper id="contact">
    <div>{children}</div>
    <Style.Copy>
      <p>
        Designer{' '}
        <a target="_blank" href="">
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
