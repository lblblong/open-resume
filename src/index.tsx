import 'antd/dist/antd.variable.min.css'
import { configure } from 'mobx'
import { ManagerProvider } from 'oh-popup-react'
import 'oh-popup-react/dist/style.css'
import { RouterView } from 'oh-router-react'
import { createRoot } from 'react-dom/client'
import 'src/assets/css/index.scss'
import 'src/assets/css/var.css'
import { router } from './router'
import { popupManager } from './shared/popupManager'
configure({ enforceActions: 'never' })

const root = createRoot(document.getElementById('root')!)

root.render(
  <>
    <RouterView router={router} />
    <ManagerProvider manager={popupManager} />
  </>
)
