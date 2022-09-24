import { FC } from 'react'
import styles from './index.module.scss'

interface Color {
  name: string
  value: string
}

interface ColorSelectProps {
  colors?: Color[]
  onSelect: (color: Color, index: number) => void
}

export const ColorSelect: FC<ColorSelectProps> = ({ colors, onSelect }) => {
  return (
    <div className={styles.index}>
      {colors!.map((it, i) => {
        return (
          <div key={i} style={{ background: it.value }} onClick={() => onSelect(it, i)}>
            {it.name}
          </div>
        )
      })}
    </div>
  )
}

ColorSelect.defaultProps = {
  colors: [
    { name: '克莱因蓝', value: '#002EA6' },
    { name: '爱马仕橙', value: '#FF770F' },
    { name: '深蓝色', value: '#000026' },
    { name: '蒂芙尼蓝', value: '#80D1C8' },
    { name: '普鲁士蓝', value: '#003152' },
    { name: '中国红', value: '#E60000' },
    { name: '提香红', value: '#B05923' },
    { name: '勃艮第红', value: '#900021' },
    { name: '木乃伊棕', value: '#8F4B28' },
    { name: '凡戴克棕', value: '#492D22' },
    { name: '马尔斯绿', value: '#01847F' },
    { name: '舍勒绿', value: '#3C7A18' },
  ],
}
