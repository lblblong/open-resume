import { FC, ReactNode } from 'react'
import styles from './index.module.scss'

interface TitleProps {
  children: ReactNode
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <div className={styles.index}>{children}</div>
}
