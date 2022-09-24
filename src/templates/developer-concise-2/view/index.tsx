import clsx from 'clsx'
import { useObserver } from 'mobx-react-lite'
import React, { FC } from 'react'
import { useTemplate } from 'src/templates'
import { DeveloperConcise2Template } from '..'
import { Header } from './header'
import styles from './index.module.scss'
import { OwnerProjects } from './ownerProjects'
import { WorkingHistory } from './workingHistory'

const View: FC = () => {
  const store = useTemplate<DeveloperConcise2Template>()
  const config = store.config
  const data = store.data

  const renderContent = useObserver(() => {
    const modules = {
      introduce: (
        <div className={clsx(styles.content, styles.introduce)}>
          {data.introduce.split('\n').map((it, i) => {
            return <div key={i}>{it}</div>
          })}
        </div>
      ),
      ownerProjects: (
        <div className={clsx(styles.content, styles.ownerProjects)}>
          <OwnerProjects />
        </div>
      ),
      workingHistory: (
        <div className={clsx(styles.content)}>
          <WorkingHistory />
        </div>
      ),
      aboutMe: <div className={clsx(styles.content)}>{data.aboutMe}</div>,
    }

    return config.modules
      .filter((it) => it.visible)
      .map((it) => {
        return (
          <div key={it.key}>
            <div className={styles.title}>
              {React.createElement(store.titleComponent, {
                value: it.name,
              })}
            </div>
            {modules[it.key]}
          </div>
        )
      })
  })

  return useObserver(() => (
    <div
      className={styles.index}
      style={
        {
          '--color-primary': config.primaryColor,
        } as any
      }
    >
      <div className={styles.header}>
        <Header />
      </div>

      {renderContent}
    </div>
  ))
}

export default View
