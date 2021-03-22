import {
  GetAbilitiesQuery,
  GetCertificateQuery,
  GetFormationQuery,
  GetProjectsQuery
} from 'graphql/generated/graphql'
import {
  GET_ABILITIES,
  GET_CERTIFICATES,
  GET_FORMATIONS,
  GET_PROJECTS
} from 'graphql/query'
import client from 'graphql/client'
import { GetStaticProps } from 'next'
import { HomeProps } from 'types/api'

import Header from 'components/Header'
import Section from 'components/Section'
import About from 'components/About'
import Projects from 'components/Projects'
import Footer from 'components/Footer'
import Contato from 'components/Contato'
import Skills from 'components/Skills'
import Formation from 'components/Formation'
import Certification from 'components/Certification'

const Home = ({
  certifications,
  formations,
  technicalAbilitie,
  projects
}: HomeProps) => {
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
        <Projects {...projects} />
      </Section>
      <Footer inverter={false}>
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
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS)

  if (!projects || !certifications || !technicalAbilitie || !formations) {
    return {
      redirect: {
        destination: 'notFound',
        permanent: false
      }
    }
  }

  return {
    revalidate: 60,
    props: {
      technicalAbilitie: { ...technicalAbilitie },
      formations: { ...formations },
      certifications: { ...certifications },
      projects: { ...projects }
    }
  }
}
