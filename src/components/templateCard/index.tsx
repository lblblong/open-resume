import { Button, Tag } from 'antd'
import { FC } from 'react'
import { BaseTemplate } from 'src/templates/template'
import styles from './index.module.scss'

interface TempalteCardProps {
  value: BaseTemplate
  onUse: () => void
}

export const TemplateCard: FC<TempalteCardProps> = ({ value, onUse }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img src={value.poster} alt="" />
        </div>
        <div className={styles.mask}>
          <div className={styles.name}>{value.name}</div>
          <div className={styles.tags}>
            {value.tags?.map((tag, i) => {
              return <Tag key={i}>{tag}</Tag>
            })}
          </div>
          <Button type="primary" onClick={onUse}>
            使用该模板
          </Button>
        </div>
      </div>
    </div>
  )
}
