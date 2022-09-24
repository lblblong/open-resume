import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  name: string
  time: [string, string]
  content: string
}

export const Working: FC<Props> = (props) => {
  const { name, time, content } = props
  return (
    <div className={styles.index}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <div className={styles.time}>
          {time[0]} - {time[1]}
        </div>
      </div>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}></div>
      </div>
    </div>
  )
}
