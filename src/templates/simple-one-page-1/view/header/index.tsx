import { useObserver } from 'mobx-react-lite'
import { useTemplate } from 'src/templates'
import { SimpleOnePage1Template } from '../..'
import styles from './index.module.scss'

export const Header = () => {
  const { data } = useTemplate<SimpleOnePage1Template>()
  return useObserver(() => (
    <div className={styles.index}>
      <div className={styles.hello}>
        HELLO<span>°</span>
      </div>
      <div className={styles.name}>我是{data.name}</div>
    </div>
  ))
}
