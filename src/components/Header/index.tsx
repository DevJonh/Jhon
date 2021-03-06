import Button from 'components/Button'
import Title from 'components/Title'
import * as Style from './styles'

const Header = () => (
  <Style.Wrapper>
    <Style.Nav>
      <Style.Logo
        src="/img/logo.png"
        alt="Nome JHON estilizado com um triângulo"
      />

      <Style.Menu>
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
      <Title title="Desenvolvedor Web | Frontend" />
      <Button label="ver projetos" />
    </Style.TitleContainer>
  </Style.Wrapper>
)

export default Header
