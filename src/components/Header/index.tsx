import Button from 'components/Button'
import Title from 'components/Title'
import { useState } from 'react'

import { MdDehaze, MdClear } from 'react-icons/md'

import * as Style from './styles'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Style.Wrapper>
      <img className="bg" src="/img/bg-header.png" alt="" />
      <Style.Nav className={isActive ? 'isActive' : ''}>
        <Style.Logo
          src="/img/logo.png"
          alt="Nome JHON estilizado com um triângulo"
          loading="lazy"
        />

        {!isActive ? (
          <MdDehaze size={'2rem'} onClick={() => setIsActive(true)} />
        ) : (
          <MdClear size={'2rem'} onClick={() => setIsActive(false)} />
        )}

        <Style.Menu className={isActive ? 'isActive' : 'isClosed'}>
          <li>
            <a href="#contact">CONTATO</a>
          </li>
          <li>
            <a href="#projects">PROJETOS</a>
          </li>
          <li>
            <a href="#certifications">CERTIFICADOS</a>
          </li>
          <li>
            <a href="#about">SOBRE</a>
          </li>
          <li>
            <a href="#home">HOME</a>
          </li>
        </Style.Menu>
      </Style.Nav>
      <Style.TitleContainer>
        <Title left={false} title="Desenvolvedor Web | Frontend" />
        <Button medium={false} href="/#projects" label="ver projetos" />
      </Style.TitleContainer>
    </Style.Wrapper>
  )
}

export default Header
