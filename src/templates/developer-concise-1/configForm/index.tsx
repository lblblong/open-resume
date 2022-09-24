import { Button, Input, Space, Switch } from 'antd'
import { useObserver } from 'mobx-react-lite'
import { Icon } from 'src/components/icon'
import { useTemplate } from 'src/templates'
import { backgroundImages, DeveloperConcise1Template } from '..'
import styles from './index.module.scss'

const ConfigForm = () => {
  const { config, moveModule } = useTemplate<DeveloperConcise1Template>()

  return useObserver(() => (
    <div className={styles.index}>
      <h3>模块</h3>
      <div className={styles.modules}>
        {config.modules.map((it, i) => {
          return (
            <div key={it.key} className={styles.item}>
              <Input
                style={{ width: 300 }}
                bordered={false}
                value={it.name}
                onChange={(e) => (it.name = e.target.value)}
              />
              <Space>
                <Switch
                  checkedChildren="显示"
                  unCheckedChildren="隐藏"
                  checked={it.visible}
                  onChange={(val) => (it.visible = val)}
                />
                <Button
                  shape="circle"
                  onClick={() => moveModule(i, i - 1)}
                  icon={<Icon value="arrow-up-line" />}
                ></Button>
              </Space>
            </div>
          )
        })}
      </div>

      <h3>Github</h3>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        是否要显示 Github 地址？
        <Switch
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          checked={config.githubVisible}
          onChange={(val) => (config.githubVisible = val)}
        />
      </div>

      <h3>背景</h3>
      <Input
        value={config.backgroundImage}
        onChange={(e) => (config.backgroundImage = e.target.value)}
        placeholder="请选择以下图片或输入图片外链"
      />
      <div className={styles.bg}>
        {backgroundImages.map((it, i) => {
          return (
            <div className={styles.item} key={i} onClick={() => (config.backgroundImage = it)}>
              <img src={it} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  ))
}

export default ConfigForm
