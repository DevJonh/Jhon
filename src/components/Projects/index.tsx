/* eslint-disable prefer-const */
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

import Heading from 'components/Heading'
import Button from 'components/Button'
import { pagination } from 'utils/pagination'
import * as Style from './styles'
import { ProjectsProps } from 'types/api'

type disabled = 'right' | 'left' | null

const Projects = (props: ProjectsProps[]) => {
  const [pageActual, setPageActual] = useState(1)
  const [projectFilter, setProjectFilter] = useState<ProjectsProps[]>([])
  const [isDisabled, setIsDisabled] = useState<disabled>('left')

  const projects = useMemo(() => {
    return Object.values(props)
  }, [props])

  useEffect(() => {
    let limit = document.body.clientWidth < 800 ? 8 : 9
    if (document.body.clientWidth < 500) {
      limit = 4
    }
    if (pageActual === 0) {
      setPageActual(1)
      return
    }
    if (pageActual === 1) {
      setIsDisabled('left')
    }

    const { result, totalPage } = pagination(projects, pageActual, limit)

    if (pageActual > 1 && pageActual < totalPage) {
      setIsDisabled(null)
    }
    if (pageActual === totalPage) {
      setIsDisabled('right')
    }

    if (result.length === 0) {
      setPageActual(pageActual - 1)
      return
    }
    setProjectFilter(result)
  }, [pageActual, projects])

  return (
    <>
      <Style.Wrapper></Style.Wrapper>
      <Style.ContainerProjects>
        <div className="pagination">
          <button
            className={`${isDisabled === 'left' && 'disabled'}`}
            disabled={isDisabled === 'left'}
            onClick={() => setPageActual(pageActual - 1)}
          >
            <FaCaretLeft size={'1.5rem'} />
          </button>
          <button
            disabled={isDisabled === 'right'}
            className={`${isDisabled === 'right' && 'disabled'}`}
            onClick={() => setPageActual(pageActual + 1)}
          >
            <FaCaretRight size={'1.5rem'} />
          </button>
        </div>
        <>
          {projectFilter.flatMap((project) => (
            <Style.BoxProjects key={project.id}>
              <Image
                src={project.image.url}
                alt={project.name}
                width={'300px'}
                height={150}
                loading="lazy"
              />
              <div>
                <Heading title={project.name} left />
                <p>{project.minDescription}</p>
                <Button medium label="Ver Projeto" href={`/${project.slug}`} />
              </div>
            </Style.BoxProjects>
          ))}
        </>
        <div className="pagination-bottom">
          <button
            disabled={isDisabled === 'left'}
            className={`${isDisabled === 'left' && 'disabled'}`}
            onClick={() => setPageActual(pageActual - 1)}
          >
            <FaCaretLeft size={'1.5rem'} />
          </button>
          <button
            disabled={isDisabled === 'right'}
            className={`${isDisabled === 'right' && 'disabled'}`}
            onClick={() => setPageActual(pageActual + 1)}
          >
            <FaCaretRight size={'1.5rem'} />
          </button>
        </div>
      </Style.ContainerProjects>
    </>
  )
}

export default Projects
