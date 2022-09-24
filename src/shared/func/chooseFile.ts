/**
 * 选择文件
 */
 export function chooseFile(_options?: {
  /** 文件类型 */
  accept?: string
  /** 是否允许多选 */
  multiple?: boolean
}) {
  return new Promise<FileList>((ok) => {
    let options = {
      accept: 'image/*',
      multiple: true,
    }

    options = Object.assign(options, _options)

    const el: HTMLInputElement = document.createElement('input')
    document.body.appendChild(el)
    el.type = 'file'
    el.accept = options.accept
    el.multiple = options.multiple
    el.style.visibility = 'hidden'
    el.style.display = 'none'
    el.addEventListener('change', (_) => {
      ok(el.files as any)
    })
    el.click()
  })
}
