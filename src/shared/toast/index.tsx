import { message, Modal } from 'antd';

export function showSucess(text: string) {
  message.success({
    content: text,
  })
}

export function showInfo(text: string) {
  message.info({
    content: text,
  })
}

export function showWarning(text: string) {
  message.warning({
    content: text,
  })
}

export function showModel(opts: { title?: string; content: string }) {
  opts = Object.assign({ title: '提示' }, opts)
  return new Promise((ok, fail) => {
    Modal.confirm({
      ...opts,
      onCancel: fail,
      onOk: ok,
    })
  })
}
