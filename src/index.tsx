import 'antd/dist/antd.variable.min.css'
import { configure } from 'mobx'
import { RouterView } from 'oh-router-react'
import { createRoot } from 'react-dom/client'
import 'src/assets/css/index.scss'
import 'src/assets/css/var.css'
import { router } from './router'
configure({ enforceActions: 'never' })

const root = createRoot(document.getElementById('root')!)

root.render(
  <>
    <RouterView router={router} />
  </>
)
