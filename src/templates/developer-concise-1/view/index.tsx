import clsx from 'clsx'
import { useObserver } from 'mobx-react-lite'
import { FC } from 'react'
import { useTemplate } from 'src/templates'
import { DeveloperConcise1Template } from '..'
import { Header } from './header'
import styles from './index.module.scss'
import { OwnerProjects } from './ownerProjects'
import { Title } from './title'
import { WorkingHistory } from './workingHistory'

const View: FC = () => {
  const { config, data } = useTemplate<DeveloperConcise1Template>()

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
      .map((it, i) => {
        return (
          <div key={it.key}>
            <div className={styles.title}>
              <Title value={it.name} line={i !== 0} />
            </div>
            {modules[it.key]}
          </div>
        )
      })
  })

  return useObserver(() => (
    <div className={styles.index}>
      <div className={styles.header}>
        <Header />
      </div>

      {renderContent}
    </div>
  ))
}

export default View
