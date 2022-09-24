import { Button, Tag } from 'antd'
import clsx from 'clsx'
import headBg from 'src/assets/image/index-head-bg.jpg'
import qrcodeWechat from 'src/assets/image/qrcode-wechat.png'
import { Icon } from 'src/components/icon'
import { toEditor } from 'src/pages/editor/route'
import { appStore } from 'src/stores/app'
import { templates } from 'src/templates'
import styles from './index.module.scss'

export const IndexPage = () => {
  return (
    <div className={styles.index}>
      <header>
        <img src={headBg} alt="" />
        <div className={styles.content}>
          <div className={styles.title}>开源的</div>
          <div className={styles.title}>在线简历编辑工具</div>

          <div className={styles.actions}>
            <Button
              type="primary"
              className={clsx(styles.action, styles.import)}
              onClick={() => {
                appStore.importConfig()
              }}
            >
              <Icon className={styles.icon} value="file-code-line" />
              导入配置
            </Button>
            <Button className={clsx(styles.action, styles.github)} onClick={appStore.toGithub}>
              <Icon className={styles.icon} value="github-fill" />
              Github
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.title}>简历模板</div>
        <div className={styles.templates}>
          {templates.map((it, i) => {
            return (
              <div key={i} className={styles.template}>
                <div className={styles.poster}>
                  <img src={it.poster} alt="" />
                </div>
                <div className={styles.mask}>
                  <div className={styles.name}>{it.name}</div>
                  <div className={styles.tags}>
                    {it.tags?.map((tag, i) => {
                      return <Tag key={i}>{tag}</Tag>
                    })}
                  </div>
                  <Button type="primary" onClick={() => toEditor({ params: { key: it.key } })}>
                    使用该模板
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.tip}>更多模板敬请期待...</div>
      </main>

      <div className={styles.group}>
        <div className={styles.title}>交流群</div>
        <div className={styles.subTitle}>这里有一群和你一样正在找工作的朋友，来加入我们的群聊吧。</div>

        <div className={styles.image}>
          <img src={qrcodeWechat} alt="" />
        </div>
      </div>
    </div>
  )
}
