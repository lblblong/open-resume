import { Button } from 'antd'
import clsx from 'clsx'
import headBg from 'src/assets/image/index-head-bg.jpg'
import qrcodeWechat from 'src/assets/image/qrcode-wechat.png'
import { Icon } from 'src/components/icon'
import { TemplateCard } from 'src/components/templateCard'
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
              <div className={styles.template} key={i}>
                <TemplateCard value={it} onUse={() => toEditor({ params: { key: it.key } })} />
              </div>
            )
          })}
        </div>

        <div className={styles.tip}>更多模板敬请期待...</div>
      </main>

      <footer>
        <div className={styles.content}>
          <div className={styles.thanks}>
            <div className={styles.title}>感谢以下开源项目</div>
            <div className={styles.list}>
              <div className={styles.item}>React</div>
              <div className={styles.item}>Mobx</div>
              <div className={styles.item}>Ant Design</div>
              <div className={styles.item}>Formily</div>
              <div className={styles.item}>emoji-mart</div>
              <div className={styles.item}>file-saver</div>
              <div className={styles.item}>html-to-image</div>
              <div className={styles.item}>vite</div>
            </div>
          </div>

          <div className={styles.group}>
            <div className={styles.title}>开源不易</div>

            <div className={styles.image}>
              <img src={qrcodeWechat} alt="" />
            </div>
            <div className={styles.des}>(请作者喝杯咖啡☕)</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
