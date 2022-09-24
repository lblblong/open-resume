import { Checkbox } from 'antd'
import clsx from 'clsx'
import { useObserver } from 'mobx-react-lite'
import { useStore } from 'src/shared/storeProvider'
import { Store } from '../store'
import styles from './index.module.scss'

export const Main = () => {
  const store = useStore<Store>()

  return useObserver(() => (
    <div className={styles.index}>
      <div className={styles.toolbar}>
        <Checkbox checked={store.grayPreview} onChange={(e) => (store.grayPreview = e.target.checked)}>
          黑白预览
        </Checkbox>
      </div>

      <div className={clsx(styles.content, store.grayPreview && styles.gray)}>
        <div id="template-view">
          <store.template.view></store.template.view>
        </div>
      </div>
    </div>
  ))
}
