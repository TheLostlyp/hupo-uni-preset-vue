export const env = {
  mock: false,
  debug: true
}

const urls = {
  prod: 'prod-rul',
  dev: 'dev-url'
}

export const localBaseUrl = env.mock ? 'mock-url' : 'debug-url'

export const serverUrl = env.debug ? urls.dev : urls.prod
