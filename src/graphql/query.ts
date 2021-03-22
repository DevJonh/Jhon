import { gql } from 'graphql-request'

export const GET_ABILITIES = gql`
  query GetAbilities {
    technicalAbilitie {
      id
      name
      icon {
        url
      }
    }
  }
`
export const GET_FORMATIONS = gql`
  query GetFormation {
    formations {
      id
      period
      formationType
      course
      college
    }
  }
`
export const GET_CERTIFICATES = gql`
  query GetCertificate {
    certifications {
      count
      certification {
        url
        id
      }
    }
  }
`
export const GET_PROJECTS = gql`
  query GetProjects($first: Int) {
    projects(first: $first) {
      id
      image {
        url
      }
      name
      minDescription
      slug
    }
  }
`
export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String!) {
    projects(where: { slug: $slug }) {
      id
      image {
        url
        height
        width
      }
      name
      minDescription
      description
      github
      storybook
      web
      tecnology
      slug
    }
  }
`
