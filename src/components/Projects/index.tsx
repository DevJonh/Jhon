/* eslint-disable prefer-const */
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

import Heading from 'components/Heading'
import Button from 'components/Button'
import { pagination } from 'utils/pagination'
import * as Style from './styles'

const projects = [
  {
    id: 1,
    img: '/img/perfil.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 2,
    img: '/img/1687.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 3,
    img: '/img/1.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 4,
    img: '/img/perfil.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 5,
    img: '/img/perfil.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 6,
    img: '/img/1687.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 7,
    img: '/img/1.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 8,
    img: '/img/1.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 9,
    img: '/img/1687.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 10,
    img: '/img/perfil.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 11,
    img: '/img/perfil.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 12,
    img: '/img/1.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 13,
    img: '/img/1687.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 14,
    img: '/img/perfil.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 15,
    img: '/img/1.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 16,
    img: '/img/perfil.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 17,
    img: '/img/1687.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 18,
    img: '/img/1.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  },
  {
    id: 19,
    img: '/img/perfil.jpg',
    title: 'Projeto',
    description: 'Betty and Brian go to the amusement park.'
  }
]

export type ProjectsProps = {
  id: number
  img: string
  title: string
  description: string
}

type disabled = 'right' | 'left' | null

const Projects = () => {
  const [pageActual, setPageActual] = useState(1)
  const [projectFilter, setProjectFilter] = useState<ProjectsProps[]>([])
  const [isDisabled, setIsDisabled] = useState<disabled>('left')

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
  }, [pageActual])

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
        {projectFilter.map((project) => (
          <Style.BoxProjects key={project.id}>
            <Image
              src={project.img}
              alt={project.title}
              width={300}
              height={150}
            />

            <div>
              <Heading title={project.title + ' ' + project.id} left />
              <p>{project.description}</p>

              <Button medium label="Ver Projeto" />
            </div>
          </Style.BoxProjects>
        ))}
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
