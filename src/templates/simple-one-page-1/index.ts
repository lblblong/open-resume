import React from 'react'
import { INormalSidevarData, NormalSidebarModel } from '../../shared/formily/datas/normal-sidebar'
import { FormilyTemplate } from '../../shared/formily/template'
import poster from './assets/poster.jpeg'

const View = React.lazy(() => import('./view'))
const ConfigForm = React.lazy(() => import('./configForm'))

const DEFAULT_CONFIG = {
  primaryColor: '#002FA7',
  background: '#ffffff',
}

export class SimpleOnePage1Template extends FormilyTemplate<INormalSidevarData, typeof DEFAULT_CONFIG> {
  key = 'simple-one-page'
  name = '简洁设计感简历1'
  tags = ['单页', '侧栏', '设计感']
  view = View
  dataForm = NormalSidebarModel.form
  configForm = ConfigForm
  poster = poster
  defaultData = NormalSidebarModel.defaultData
  defaultConfig = DEFAULT_CONFIG

  config = {
    primaryColor: '#002FA7',
    background: '#ffffff',
  }
}
