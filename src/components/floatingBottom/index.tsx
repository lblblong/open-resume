import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'
import { useScrollFloating } from 'src/shared/hooks/useScrollFloating'
import styles from './index.module.scss'

interface FloatActionsProps {
  target: React.MutableRefObject<HTMLElement | null>
  children: ReactNode
}

export const FloatingBottom: FC<FloatActionsProps> = ({ target, children }) => {
  const { visible } = useScrollFloating(target)

  return <div className={clsx(styles.index, visible === false && styles.hidden)}>{children}</div>
}
