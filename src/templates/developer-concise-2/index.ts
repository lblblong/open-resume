import { computed, makeObservable } from 'mobx'
import React from 'react'
import { FormilyTemplate, IDeveloperData } from 'src/shared/formily'
import { DeveloperModel } from 'src/shared/formily/datas/developer'
import poster from './assets/poster.jpeg'
import { TitleStyle1 } from './view/titles/style1'
import { TitleStyle2 } from './view/titles/style2'
import { TitleStyle3 } from './view/titles/style3'
import { TitleStyle4 } from './view/titles/style4'
import { TitleStyle5 } from './view/titles/style5'
import { TitleStyle6 } from './view/titles/style6'
import { TitleStyle7 } from './view/titles/style7'

const View = React.lazy(() => import('./view'))
const ConfigForm = React.lazy(() => import('./configForm'))

export const titles = [
  {
    name: 'style1',
    component: TitleStyle1,
  },
  {
    name: 'style2',
    component: TitleStyle2,
  },
  {
    name: 'style3',
    component: TitleStyle3,
  },
  {
    name: 'style4',
    component: TitleStyle4,
  },
  {
    name: 'style5',
    component: TitleStyle5,
  },
  {
    name: 'style6',
    component: TitleStyle6,
  },
  {
    name: 'style7',
    component: TitleStyle7,
  },
]

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
  githubVisible: true,
  primaryColor: '#002FA7',
  titleStyle: titles[0].name,
}

export class DeveloperConcise2Template extends FormilyTemplate<IDeveloperData, typeof DEFAULT_CONFIG> {
  key = 'developer-concise-2'
  name = '程序员简洁风简历'
  tags = ['简洁', '程序员']
  view = View
  configForm = ConfigForm
  dataForm = DeveloperModel.form
  poster = poster
  defaultData = DeveloperModel.defaultData
  defaultConfig = DEFAULT_CONFIG

  constructor() {
    super()
    makeObservable(this, {
      titleComponent: computed,
    })
  }

  get titleComponent() {
    return titles.find((it) => it.name === this.config.titleStyle)!.component
  }

  moveModule = (index: number, targetIndex: number) => {
    if (targetIndex < 0) return
    let temp = this.config.modules[targetIndex]
    this.config.modules[targetIndex] = this.config.modules[index]
    this.config.modules[index] = temp
  }
}
