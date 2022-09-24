import { saveAs } from 'file-saver'
import { toBlob } from 'html-to-image'
import { makeAutoObservable } from 'mobx'
import { router } from 'src/router'
import { showInfo } from 'src/shared/toast'
import { appStore } from 'src/stores/app'
import { templates } from 'src/templates'
import { BaseTemplate } from '../../shared/baseTemplate'
import { toEditor } from './route'

export class Store {
  template: BaseTemplate

  grayPreview = false

  constructor(key: string) {
    this.template = templates.find((tmp) => tmp.key === key)!
    const state: any = router.location?.state

    this.template.importConfig(state?.config)
    this.template.importData(state?.data)

    if (!state) {
      showInfo('已自动填充初始信息')
    }

    makeAutoObservable(this, {
      template: false,
    })
  }

  currentForm: 'data' | 'config' | 'template' = 'data'

  get availableTemplates() {
    return templates.filter((t) => t.dataForm === this.template.dataForm && t.key !== this.template.key)
  }

  exportJson = () => {
    const config = this.template.exportConfig()
    const data = this.template.exportData()

    saveAs(
      new Blob(
        [
          JSON.stringify({
            templateKey: this.template.key,
            templateName: this.template.name,
            templateConfig: {
              config,
              data,
            },
          }),
        ],
        { type: 'text/plain;charset=utf-8' }
      ),
      `resume.json`
    )
  }

  exportPdf = () => {
    // TODO: openPrintHelp
    appStore.callPrint()
  }

  exportPng = async () => {
    const container = document.getElementById('template-view')!

    const options = {
      type: 'image/jpeg',
      cacheBust: true,
      canvasHeight: container.clientHeight,
      canvasWidth: container.clientWidth,
    }

    // 提前调用两次避免生成空白的页面
    await toBlob(container, options)
    await toBlob(container, options)

    const data = await toBlob(container, options)
    saveAs(data!, 'resume.jpeg')
  }

  changeTemplate = (key: string) => {
    const targetTemplate = templates.find((it) => it.key === key)
    if (!targetTemplate) return

    if (targetTemplate.dataForm === this.template.dataForm) {
      toEditor({
        params: { key },
        data: {
          data: this.template.exportData(),
        },
      })
    } else {
      toEditor({
        params: { key },
      })
    }
  }
}
