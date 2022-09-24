import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  value: string
}

export const TitleStyle3: FC<Props> = (props) => {
  const { value } = props

  return (
    <div className={styles.index}>
      <div className={styles.bg}></div>
      <div className={styles.text}>{value}</div>
    </div>
  )
}

TitleStyle3.defaultProps = {}
