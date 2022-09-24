import { useObserver } from 'mobx-react-lite'
import { Working } from 'src/components/working'
import { useTemplate } from 'src/templates'
import { DeveloperConcise1Template } from '../..'
import styles from './index.module.scss'

export const WorkingHistory = () => {
  const { data } = useTemplate<DeveloperConcise1Template>()

  return useObserver(() => (
    <div className={styles.index}>
      {data.workingHistory.map((it, i1) => {
        return (
          <div className={styles.item} key={i1}>
            <Working name={it.title} time={[it.startTime, it.endTime]} content={it.content} />
          </div>
        )
      })}
    </div>
  ))
}
