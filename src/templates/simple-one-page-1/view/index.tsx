import clsx from 'clsx'
import { useObserver } from 'mobx-react-lite'
import { Working } from 'src/components/working'
import { useTemplate } from 'src/templates'
import { SimpleOnePage1Template } from '..'
import { BaseInfo } from './baseInfo'
import { Header } from './header'
import styles from './index.module.scss'
import { LeftItem } from './leftItem'
import { Title } from './title'

const View = () => {
  const { config, data } = useTemplate<SimpleOnePage1Template>()
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
      <Header />
      <BaseInfo />
      <main>
        <div className={styles.left}>
          {data.sidebar.map((p, i) => {
            return <LeftItem key={i} title={p.title} labels={p.content.split('\n')} />
          })}
        </div>
        <div className={styles.right}>
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

          <div className={clsx(styles.title, styles.introduceTitle)}>
            <Title>自我评价</Title>
          </div>

          <div className={styles.introduce}>{data.introduce}</div>
        </div>
      </main>
    </div>
  ))
}

export default View
