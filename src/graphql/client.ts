import { GraphQLClient } from 'graphql-request'
import env from '../../environment'

const endpoint = process.env.GRAPHQL_HOST || env.GRAPHQL_HOST

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN || env.GRAPHQL_TOKEN}`
  }
})

export default client
