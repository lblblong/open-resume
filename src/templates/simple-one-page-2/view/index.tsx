import { useObserver } from 'mobx-react-lite'
import { Working } from 'src/components/working'
import { useTemplate } from 'src/templates'
import { Store } from '..'
import { Header } from './header'
import styles from './index.module.scss'
import { LeftItem } from './leftItem'
import { Title } from './title'

const View = () => {
  const store = useTemplate<Store>()
  const { config, data } = store
  return useObserver(() => (
    <div
      className={styles.index}
      style={
        {
          '--color-primary': config.primaryColor,
          '--background': config.background,
        } as any
      }
    >
      <div className={styles.left}>
        {[store.baseInfo, ...data.sidebar].map((p, i) => {
          return <LeftItem key={i} title={p.title} labels={p.content.split('\n')} />
        })}
      </div>

      <div className={styles.right}>
        <Header />

        <div className={styles.title}>
          <Title>工作经历</Title>
        </div>

        {data.workingHistory.map((it, i1) => {
          return (
            <div className={styles.item} key={i1}>
              <Working name={it.title} time={[it.startTime, it.endTime]} content={it.content} />
            </div>
          )
        })}

        <div className={styles.title}>
          <Title>自我评价</Title>
        </div>

        <div className={styles.introduce}>{data.introduce}</div>
      </div>
    </div>
  ))
}

export default View
