import { router } from 'src/router'
import { IndexPage } from '.'

export const indexRoute = { path: '/', element: <IndexPage /> }

export function toIndex() {
  router.navigate('/')
}
