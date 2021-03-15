import {
  GetAbilitiesQuery,
  GetCertificateQuery,
  GetFormationQuery
} from 'graphql/generated/graphql'
import { GET_ABILITIES, GET_CERTIFICATES, GET_FORMATIONS } from 'graphql/query'
import client from 'graphql/client'
import { GetStaticProps } from 'next'

import Header from 'components/Header'
import Section from 'components/Section'
import About from 'components/About'
import Skills, { SkillsProps } from 'components/Skills'
import Formation, { FormationProps } from 'components/Formation'
import Certification, { CertificateProps } from 'components/Certification'
import Projects from 'components/Projects'
import Footer from 'components/Footer'
import Contato from 'components/Contato'

type HomeProps = {
  technicalAbilitie: SkillsProps[]
  formations: FormationProps[]
  certifications: CertificateProps[]
}

const Home = ({ certifications, formations, technicalAbilitie }: HomeProps) => {
  return (
    <>
      <Header />

      <Section title="Sobre" left id="about">
        <About />
        <Skills {...technicalAbilitie} />
        <Formation {...formations} />
      </Section>
      <Section left id="certifications" title="CERTIFICADOS">
        <Certification {...certifications} />
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

export const getStaticProps: GetStaticProps = async () => {
  const { technicalAbilitie } = await client.request<GetAbilitiesQuery>(
    GET_ABILITIES
  )
  const { formations } = await client.request<GetFormationQuery>(GET_FORMATIONS)
  const { certifications } = await client.request<GetCertificateQuery>(
    GET_CERTIFICATES
  )

  return {
    revalidate: 5,
    props: {
      technicalAbilitie,
      formations,
      certifications
    }
  }
}
