import { Input } from 'antd'
import { useObserver } from 'mobx-react-lite'
import { ColorSelect } from 'src/components/colorSelect'
import { useTemplate } from 'src/templates'
import { SimpleOnePage1Template } from '..'
import styles from './index.module.scss'

const backgrounds = [
  {
    label: '纯白',
    value: '#ffffff',
  },
  {
    label: '光晕',
    value: `linear-gradient(
      140deg,
      #fff1f032 0%,
      #fff2e832 6%,
      #fff7e632 13%,
      #fffbe632 22%,
      #fcffe632 37%,
      #f6ffed32 56%,
      #e6fffb32 70%,
      #e6f7ff32 79%,
      #f0f5ff32 86%,
      #f9f0ff32 91%,
      #fff0f632 96%,
      #fff0f632 100%
    )`,
  },
  {
    label: '浅蓝',
    value: '#f0f5ff32',
  },
  {
    label: '浅红',
    value: '#fff0f632',
  },
]

const ConfigForm = () => {
  const { config } = useTemplate<SimpleOnePage1Template>()

  return useObserver(() => (
    <div className={styles.index}>
      <h3>主色调</h3>
      <Input value={config.primaryColor} onChange={(e) => (config.primaryColor = e.target.value)} />
      <ColorSelect onSelect={(color) => (config.primaryColor = color.value)} />

      <h3>背景</h3>
      <Input.TextArea
        autoSize
        value={config.background}
        onChange={(e) => (config.background = e.target.value)}
      ></Input.TextArea>

      <div className={styles.backgrounds}>
        {backgrounds.map((it, i) => {
          return (
            <div
              key={i}
              className={styles.item}
              onClick={() => (config.background = it.value)}
              style={{ background: it.value }}
            >
              {it.label}
            </div>
          )
        })}
      </div>
    </div>
  ))
}

export default ConfigForm
