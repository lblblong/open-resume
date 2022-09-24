import { Router } from 'oh-router'
import { editorRoute } from 'src/pages/editor/route'
import { indexRoute } from 'src/pages/index/route'

export const router = new Router<any>({
  routes: [
    indexRoute,
    editorRoute,
    {
      path: '*',
      element: '404',
    },
  ],
})
