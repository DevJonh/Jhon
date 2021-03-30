import Heading from 'components/Heading'
import Image from 'next/image'
import * as Style from './styles'

const About = () => (
  <Style.Wrapper>
    <Image
      src="/img/perfil.jpg"
      alt="Foto de Jhon author e criador deste site."
      width={150}
      height={150}
      loading="lazy"
    />
    <Heading title="JONATAS SENNA" slogan="Desenvolvedor web | frontend" />

    <p className="description">
      Graduando em Analise e Desenvolvimento de Sistemas. Apaixonado por
      desenvolvimento web. Sempre aprendendo e evoluindo, afinal sempre haverá
      mais coisas para se aprender. Por essa razão serei um eterno aprendiz.
    </p>
  </Style.Wrapper>
)

export default About
