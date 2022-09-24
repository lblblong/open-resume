import { router } from 'src/router'
import { EditorPage } from '.'

export const editorRoute = { path: '/editor/:key', element: <EditorPage /> }

export type Params = {
  key: string
}

export type Data = {
  data?: any
  config?: any
}

export function toEditor(options: { params: Params; data?: any; replace?: boolean }) {
  router.navigate('/editor/' + options.params.key, {
    replace: options.replace,
    state: options.data,
  })
}
