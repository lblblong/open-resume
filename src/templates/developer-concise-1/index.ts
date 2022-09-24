import React from 'react'
import { FormilyTemplate, IDeveloperData } from 'src/shared/formily'
import { DeveloperModel } from 'src/shared/formily/datas/developer'
import bg1 from './assets/images/bg1.png'
import bg2 from './assets/images/bg2.png'
import bg3 from './assets/images/bg3.png'
import bg4 from './assets/images/bg4.png'
import bg5 from './assets/images/bg5.png'
import bg6 from './assets/images/bg6.png'
import bg7 from './assets/images/bg7.png'
import bg8 from './assets/images/bg8.png'
import bg9 from './assets/images/bg9.png'
import bg10 from './assets/images/bg10.png'
import bg11 from './assets/images/bg11.png'
import poster from './assets/poster.jpeg'

export const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11]

const View = React.lazy(() => import('./view'))
const ConfigForm = React.lazy(() => import('./configForm'))

const DEFAULT_CONFIG = {
  modules: [
    {
      key: 'introduce' as const,
      name: '简介',
      visible: true,
    },
    {
      key: 'workingHistory' as const,
      name: '工作经历',
      visible: true,
    },
    {
      key: 'ownerProjects' as const,
      name: '个人项目',
      visible: true,
    },
    {
      key: 'aboutMe' as const,
      name: '关于我',
      visible: true,
    },
  ],
  backgroundImage: backgroundImages[0],
  githubVisible: true,
}

export class DeveloperConcise1Template extends FormilyTemplate<IDeveloperData, typeof DEFAULT_CONFIG> {
  key = 'developer-concise-1'
  name = '程序员创意简洁风格简历'
  tags = ['简洁', '设计感', '程序员']
  poster = poster
  view = View
  configForm = ConfigForm
  dataForm = DeveloperModel.form
  defaultData = DeveloperModel.defaultData
  defaultConfig = DEFAULT_CONFIG

  moveModule = (index: number, targetIndex: number) => {
    if (targetIndex < 0) return
    let temp = this.config.modules[targetIndex]
    this.config.modules[targetIndex] = this.config.modules[index]
    this.config.modules[index] = temp
  }
}
