import { useObserver } from 'mobx-react-lite'
import { useTemplate } from 'src/templates'
import { DeveloperConcise2Template } from '../..'
import styles from './index.module.scss'

export const OwnerProjects = () => {
  const { data, config } = useTemplate<DeveloperConcise2Template>()

  return useObserver(() => (
    <div className={styles.index}>
      {data.projects.map((it, i) => {
        return (
          <div key={i} className={styles.item}>
            <div className={styles.header}>
              <div className={styles.name}>{it.title}</div>
              <div className={styles.time}></div>
            </div>
            <div className={styles.des} dangerouslySetInnerHTML={{ __html: it.content.replace(/\n/g, '<br/>') }}></div>
          </div>
        )
      })}
      {config.githubVisible && (
        <div className={styles.more}>
          ➱ 更多我的个人项目请看 GitHub：
          <span
            style={{
              textDecoration: 'underline',
            }}
          >
            {data.github}
          </span>
        </div>
      )}
    </div>
  ))
}
