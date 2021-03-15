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
