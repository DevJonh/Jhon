import Image from 'next/image'
import Heading from 'components/Heading'
import * as Style from './styles'
import { useMemo } from 'react'

export interface SkillsProps {
  id: string
  name: string
  icon: {
    url: string
  }
}

function Skills(props: SkillsProps[]) {
  const skills = useMemo(() => {
    return Object.values(props)
  }, [props])

  return (
    <Style.Wrapper>
      <Heading title="Habilidades Técnicas" />

      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Image
              src={skill.icon.url}
              alt={`Logo de ${skill.name}`}
              width={'3.5rem'}
              height={'3.5rem'}
            />

            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </Style.Wrapper>
  )
}

export default Skills
