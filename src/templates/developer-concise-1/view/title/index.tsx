import { useObserver } from 'mobx-react-lite'
import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  value: string
  line?: boolean
}

export const Title: FC<Props> = (props) => {
  const { value, line } = props

  return (
    <div className={styles.index}>
      <div className={styles.title}>{value}</div>
      {line && <div className={styles.line}></div>}
    </div>
  )
}

Title.defaultProps = {
  line: true,
}
