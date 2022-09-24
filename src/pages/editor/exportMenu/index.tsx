import { FC } from 'react'
import jpeg from 'src/assets/image/icon/jpeg.png'
import pdf from 'src/assets/image/icon/pdf.png'
import { useStore } from 'src/shared/storeProvider'
import { Store } from '../store'
import styles from './index.module.scss'

interface ExportMenuProps {}

export const ExportMenu: FC<ExportMenuProps> = () => {
  const store = useStore<Store>()
  return (
    <div className={styles.index}>
      <div className={styles.item} onClick={store.exportPdf}>
        <img className={styles.icon} src={pdf} alt="" />
        <div className={styles.titleBox}>
          <div className={styles.title}>
            导出为 PDF<span>推荐</span>
          </div>
          <div className={styles.des}>适用于打印和分享</div>
        </div>
      </div>
      <div className={styles.item} onClick={store.exportPng}>
        <img className={styles.icon} src={jpeg} alt="" />
        <div className={styles.titleBox}>
          <div className={styles.title}>导出为图片</div>
          <div className={styles.des}>适用于分享</div>
        </div>
      </div>
    </div>
  )
}
