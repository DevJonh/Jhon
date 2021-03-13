import Header from 'components/Header'
import Section from 'components/Section'
import React from 'react'
import About from 'components/About'
import Skills from 'components/Skills'
import Formation from 'components/Formation'
import Certification from 'components/Certification'
import Projects from 'components/Projects'
import Footer from 'components/Footer'
import Contato from 'components/Contato'

const Home = () => {
  return (
    <>
      <Header />

      <Section title="Sobre" left id="about">
        <About />
        <Skills />
        <Formation />
      </Section>
      <Section left id="certifications" title="CERTIFICADOS">
        <Certification />
      </Section>
      <Section title="Projetos" left id="projects">
        <Projects />
      </Section>
      <Footer>
        <Contato />
      </Footer>
    </>
  )
}

export default Home
