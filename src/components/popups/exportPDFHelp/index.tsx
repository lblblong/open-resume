import { Alert, Button, Space } from 'antd'
import { useController } from 'oh-popup-react'
import { popupManager } from 'src/shared/popupManager'
import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import styles from './index.module.scss'

const ExportPDFHelp = () => {
  const ctl = useController()
  return (
    <div className={styles.index}>
      <header>导出 PDF 帮助</header>
      <main>
        <div className={styles.content}>
          <p>
            <Alert message="建议使用 Edge 浏览器进行导出" />
          </p>
          <p>请按以下步骤检查导出配置，避免导出与预览不一致。</p>
          <p>1️⃣ 打印机选项中选择「另存为PDF」</p>
          <p>
            <img src={image1} alt="" />
          </p>
          <p>2️⃣ 在更多设置中勾选「背景图形」选项</p>
          <p>点击「更多设置」</p>
          <p>
            <img src={image2} alt="" />
          </p>
          <p>然后勾选「背景图形」选项</p>
          <p>
            <img src={image3} alt="" />
          </p>
        </div>
      </main>
      <footer>
        <Space>
          <Button
            onClick={() => {
              setFlag()
              ctl.close()
            }}
          >
            不再显示
          </Button>
          <Button type="primary" onClick={() => ctl.close()}>
            知道了
          </Button>
        </Space>
      </footer>
    </div>
  )
}

function setFlag() {
  localStorage.setItem('openExportPDFHelp', 'true')
}

function getFlag() {
  return localStorage.getItem('openExportPDFHelp')
}

export function openExportPDFHelp() {
  if (getFlag()) return
  return popupManager.open({
    el: <ExportPDFHelp />,
    position: 'center',
    maskClosable: false,
  })
}
