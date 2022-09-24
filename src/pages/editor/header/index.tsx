import { Button, Dropdown } from 'antd'
import clsx from 'clsx'
import { useObserver } from 'mobx-react-lite'
import { Icon } from 'src/components/icon'
import { toIndex } from 'src/pages/index/route'
import { useStore } from 'src/shared/storeProvider'
import { appStore } from 'src/stores/app'
import { ExportMenu } from '../exportMenu'
import { Store } from '../store'
import styles from './index.module.scss'

export const Header = () => {
  const store = useStore<Store>()

  return useObserver(() => (
    <header className={styles.index}>
      <div className={styles.left}>
        <div className={clsx(styles.item, styles.interactive, styles.back)} onClick={() => toIndex()}>
          <Icon className={styles.icon} value="arrow-left-s-line" />
          <span>首页</span>
        </div>
        <span>/</span>
        <div className={clsx(styles.item, styles.templateName)}>{store.template.name}</div>
      </div>

      <div className={styles.right}>
        <Button type="link" className={clsx(styles.item, styles.github)} onClick={appStore.toGithub}>
          <Icon className={styles.icon} value="github-fill" />
          Github
        </Button>

        <Button onClick={store.exportJson} className={clsx(styles.item, styles.exportConfig)}>
          <Icon className={styles.icon} value="file-code-line" />
          导出配置
        </Button>

        <Dropdown overlay={<ExportMenu />} trigger={['click']}>
          <Button type="primary" className={clsx(styles.item, styles.export)}>
            <Icon className={styles.icon} value="download-2-line" />
            导出
          </Button>
        </Dropdown>
      </div>
    </header>
  ))
}
