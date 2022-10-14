import { makeAutoObservable } from 'mobx'
import { config } from 'src/config'
import { toEditor } from 'src/pages/editor/route'
import { chooseFile } from 'src/shared/func/chooseFile'

export const appStore = new (class {
  print = false

  constructor() {
    makeAutoObservable(this)

    window.onbeforeprint = () => {
      this.print = true
    }

    window.onafterprint = () => {
      this.print = false
    }
  }

  callPrint = () => {
    this.print = true
    setTimeout(() => {
      window.print()
    })
  }

  importConfig = async () => {
    const files = await chooseFile({
      multiple: false,
      accept: '.json',
    })

    const file = files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      const config = JSON.parse(reader.result as string)
      toEditor({
        params: { key: config.templateKey },
        data: config.templateConfig,
      })
    }
    reader.readAsText(file)
  }

  toGithub = () => {
    window.open(config.github)
  }
})()
