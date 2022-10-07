import clsx from 'clsx'
import { Observer } from 'mobx-react-lite'
import { useParams } from 'oh-router-react'
import { useMemo } from 'react'
import { StoreProvider } from 'src/shared/storeProvider'
import { appStore } from 'src/stores/app'
import { Aside } from './aside'
import { Header } from './header'
import styles from './index.module.scss'
import { Main } from './main'
import { Params } from './route'
import { Store } from './store'

export const EditorPage = () => {
  const { key } = useParams<Params>()
  const store = useMemo(() => {
    return new Store(key!)
  }, [key])
  const Provider = useMemo(() => store.template.provider, [store])

  return (
    <StoreProvider value={store}>
      <Provider>
        <Observer>
          {() => (
            <div className={styles.index}>
              {appStore.print ? (
                <store.template.view></store.template.view>
              ) : (
                <div className={clsx(styles.main)}>
                  <Header />
                  <Aside />
                  <Main />
                </div>
              )}
            </div>
          )}
        </Observer>
      </Provider>
    </StoreProvider>
  )
}
