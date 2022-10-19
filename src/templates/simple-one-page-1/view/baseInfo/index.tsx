import { useObserver } from 'mobx-react-lite'
import { useTemplate } from 'src/templates'
import { SimpleOnePage1Template } from '../..'
import styles from './index.module.scss'

export const BaseInfo = () => {
  const { data } = useTemplate<SimpleOnePage1Template>()

  return useObserver(() => {
    const items = [
      {
        label: '年龄',
        value: data.age,
      },
      {
        label: '性别',
        value: data.gender,
      },
      {
        label: '城市',
        value: data.city,
      },
      {
        label: '电话',
        value: data.phoneNumber,
      },
      {
        label: '邮箱',
        value: data.email,
      },
    ]

    return (
      <div className={styles.index}>
        {items.map((it, i) => {
          return (
            <div key={i}>
              {it.label}: {it.value}
            </div>
          )
        })}
      </div>
    )
  })
}
