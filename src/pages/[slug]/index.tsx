/* eslint-disable prefer-const */
import client from 'graphql/client'
import {
  GetProjectBySlugQuery,
  GetProjectsQuery
} from 'graphql/generated/graphql'
import { GET_PROJECTS, GET_PROJECT_BY_SLUG } from 'graphql/query'
import { GetStaticProps } from 'next'
import ProjectTemplate from 'template/ProjectTemplate'
import { ProjectsBySlug, ProjectsProps } from 'types/api'

const Project = (props: ProjectsBySlug) => {
  return <ProjectTemplate {...props} />
}

export default Project

export async function getStaticPaths() {
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS, {
    qtd: 9
  })

  const paths = projects.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projects } = await client.request<GetProjectBySlugQuery>(
    GET_PROJECT_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  let newProduct = {}
  projects.forEach((item) => {
    newProduct = { ...item }
  })

  return {
    revalidate: 5,
    props: {
      projects: { ...newProduct }
    }
  }
}
