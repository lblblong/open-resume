import React from 'react'
import { INormalSidevarData, NormalSidebarModel } from 'src/shared/formily/datas/normal-sidebar'
import { FormilyTemplate } from '../../shared/formily/store'
import poster from './assets/poster.jpeg'

const View = React.lazy(() => import('./view'))
const ConfigForm = React.lazy(() => import('./configForm'))

const DEFAULT_CONFIG = {
  primaryColor: '#002FA7',
  background: '#ffffff',
}

export class SimpleOnePage2Template extends FormilyTemplate<INormalSidevarData, typeof DEFAULT_CONFIG> {
  key = 'simple-one-page2'
  name = '简洁设计感简历2'
  tags = ['单页', '侧栏', '设计感']
  view = View
  dataForm = NormalSidebarModel.form
  configForm = ConfigForm
  poster = poster
  defaultData = NormalSidebarModel.defaultData
  defaultConfig = DEFAULT_CONFIG

  get baseInfo() {
    return {
      title: '基础信息',
      content: [
        {
          label: '年龄',
          value: this.data.age,
        },
        {
          label: '性别',
          value: this.data.gender,
        },
        {
          label: '城市',
          value: this.data.city,
        },
        {
          label: '电话',
          value: this.data.phoneNumber,
        },
        {
          label: '邮箱',
          value: this.data.email,
        },
      ]
        .filter((it) => Boolean(it.value))
        .reduce((pre, cur) => {
          return (pre += `${cur.label}: ${cur.value}\n`)
        }, ''),
    }
  }
}
