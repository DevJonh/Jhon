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
    />
    <Heading title="JONATAS SENNA" slogan="Desenvolvedor web | frontend" />

    <p className="description">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti
      labore eaque deleniti voluptatem harum id natus et animi aperiam expedita,
      possimus, fugit architecto exercitationem ex est cupiditate quod suscipit.
    </p>
  </Style.Wrapper>
)

export default About
