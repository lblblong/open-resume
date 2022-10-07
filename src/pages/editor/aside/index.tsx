import { Alert, Spin } from 'antd'
import clsx from 'clsx'
import { Observer, useObserver } from 'mobx-react-lite'
import { Suspense, useRef } from 'react'
import { TemplateCard } from 'src/components/templateCard'
import { useStore } from 'src/shared/storeProvider'
import { FloatingActions } from '../floatingActions'
import { Store } from '../store'
import styles from './index.module.scss'

const FORM_MENUS = [
  {
    label: '数据',
    value: 'data' as const,
  },
  {
    label: '样式',
    value: 'config' as const,
  },
  {
    label: '模板',
    value: 'template' as const,
  },
]

export const Aside = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const store = useStore<Store>()

  const renderAvailableTemplates = (
    <Observer>
      {() => (
        <div className={styles.availableTemplates}>
          <Alert message="可保持数据不变切换到以下任意模板" />
          <div className={styles.items}>
            {store.availableTemplates.map((it, i) => {
              return (
                <div key={i} className={styles.template}>
                  <TemplateCard value={it} onUse={() => store.changeTemplate(it.key)} />
                </div>
              )
            })}
            {store.availableTemplates.length === 0 && '暂无可用模板'}
          </div>
        </div>
      )}
    </Observer>
  )

  return useObserver(() => (
    <div className={styles.index}>
      <div className={styles.menu}>
        {FORM_MENUS.map((menu) => {
          return (
            <div
              key={menu.value}
              className={clsx(styles.item, store.currentForm === menu.value && styles.active)}
              onClick={() => (store.currentForm = menu.value)}
            >
              {menu.label.split('').map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </div>
          )
        })}
      </div>
      <div className={styles.container}>
        {store.currentForm !== 'template' && <FloatingActions target={contentRef} />}
        <div className={styles.content} ref={contentRef}>
          {store.currentForm === 'data' && (
            <Suspense fallback={<Spin />}>
              <store.template.dataForm />
            </Suspense>
          )}
          {store.currentForm === 'config' && (
            <Suspense fallback={<Spin />}>
              <store.template.configForm></store.template.configForm>
            </Suspense>
          )}
          {store.currentForm === 'template' && renderAvailableTemplates}
        </div>
      </div>
    </div>
  ))
}
