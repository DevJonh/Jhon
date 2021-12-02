// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const createEnvFile = require('./environment-builder')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  webpack: (config) => {
    createEnvFile()
    return config
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['media.graphcms.com']
  }
})
