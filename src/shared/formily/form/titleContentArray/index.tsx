import { ArrayBase, ArrayItems, FormItem, Input } from '@formily/antd'
import { ArrayField, Field } from '@formily/react'
import { Space } from 'antd'
import { FC } from 'react'
import styles from './index.module.scss'

interface TitleContentArrayProps {
  name: string
  titlePlaceholder?: string
  contentPlaceholder?: string
}

export const TitleContentArray: FC<TitleContentArrayProps> = ({ name, titlePlaceholder, contentPlaceholder }) => {
  return (
    <FormItem>
      <div className={styles.index}>
        <ArrayField name={name}>
          {(field) => (
            <ArrayBase>
              {field.value.map((_, index) => {
                return (
                  <div key={index} className={styles.item}>
                    <Field name={index}>
                      <div style={{ display: 'flex' }}>
                        <Field name="title" component={[Input, { placeholder: titlePlaceholder }]} />
                        <Space>
                          <ArrayItems.MoveUp index={index} />
                          <ArrayItems.Remove index={index} />
                        </Space>
                      </div>
                      <Field
                        name="content"
                        component={[Input.TextArea, { autoSize: true, placeholder: contentPlaceholder }]}
                      />
                    </Field>
                  </div>
                )
              })}

              <div className={styles.add}>
                <ArrayItems.Addition title="添加" defaultValue={{ title: '', content: '' }} />
              </div>
            </ArrayBase>
          )}
        </ArrayField>
      </div>
    </FormItem>
  )
}

TitleContentArray.defaultProps = {
  titlePlaceholder: '请输入标题',
  contentPlaceholder: '请输入内容',
}
