import Image from 'next/image'
import Header from 'components/Header'
import Section from 'components/Section'

const Home = () => {
  return (
    <>
      <Header />
      <Section title="Sobre" left={true} id="#Sobre">
        <div className="container">
          <div className="about">
            <Image
              src="/img/perfil.jpg"
              alt="Foto de Jhon author e criador deste site."
              width={150}
              height={150}
            />
          </div>
          <div className="skills"></div>
        </div>
      </Section>
    </>
  )
}

export default Home
