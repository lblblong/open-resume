import { useObserver } from 'mobx-react-lite'
import { useTemplate } from 'src/templates'
import { DeveloperConcise2Template } from '../..'
import styles from './index.module.scss'

export const Header = () => {
  const { data } = useTemplate<DeveloperConcise2Template>()

  return useObserver(() => (
    <div className={styles.index}>
      <div className={styles.content}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.des}>
          <span>
            {[data.age, data.gender, data.city, data.target, data.phoneNumber, data.email].filter(Boolean).join(' ∕ ')}
          </span>
          <br />
          <span>{`${data.education.graduationTime} 年毕业于 ${data.education.schoolName} - ${data.education.major}`}</span>
        </div>
      </div>
    </div>
  ))
}
