import Markdown from 'markdown-to-jsx'
import * as Styles from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardBackspace } from 'react-icons/md'
import { FaGlobe, FaGithub } from 'react-icons/fa'

import { ProjectsBySlug } from 'types/api'
import Title from 'components/Title'
import { useMemo } from 'react'
import Heading from 'components/Heading'
import Footer from 'components/Footer'
import Contato from 'components/Contato'

const ProjectTemplate = ({ projects }: ProjectsBySlug) => {
  const skills = useMemo(() => {
    return projects.tecnology.split('-')
  }, [projects.tecnology])

  return (
    <>
      <Styles.HeaderStyles>
        <img
          className="bg"
          src="/img/bg-header.png"
          alt="background"
          loading="lazy"
        />
        <Image
          src="/img/logo.png"
          alt="Logo com o nome JHON"
          width={150}
          height={50}
          className="logo"
          loading="lazy"
        />
        <Link href="/">
          <a>
            <MdKeyboardBackspace />
          </a>
        </Link>
      </Styles.HeaderStyles>
      <Styles.ContainerImage>
        <Image
          src={projects.image.url}
          alt={projects.name}
          width={projects.image.width}
          height={projects.image.height}
          loading="lazy"
          className="logo"
          objectFit="contain"
        />
      </Styles.ContainerImage>
      <Styles.Container>
        <Title left title={projects.name} />

        <Styles.ContainerTecnology>
          <Heading title="TECNOLOGIAS" />
          <Styles.Tecnology>
            {skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </Styles.Tecnology>
        </Styles.ContainerTecnology>

        <Title left title="DESCRIÇÃO" />

        <Styles.Descricao>
          <Markdown>{projects.description}</Markdown>
        </Styles.Descricao>

        <Styles.Publishers>
          {projects.storybook && (
            <Link href={projects.storybook}>
              <a rel="noreferrer" target="_blank" className="storybook">
                <img src="/img/storybook.svg" loading="lazy" />
              </a>
            </Link>
          )}
          {projects.github && (
            <Link href={projects.github}>
              <a rel="noreferrer" target="_blank" className="github">
                <FaGithub size={'50%'} color="#f5f5f5" />
              </a>
            </Link>
          )}
          {projects.web && (
            <Link href={projects.web}>
              <a rel="noreferrer" target="_blank" className="web">
                <FaGlobe size={'50%'} color="#f5f5f5" />
              </a>
            </Link>
          )}
        </Styles.Publishers>
      </Styles.Container>

      <Footer inverter={true}>
        <Contato />
      </Footer>
    </>
  )
}

export default ProjectTemplate
