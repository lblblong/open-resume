import { ArrayBase, ArrayItems, FormItem, Input } from '@formily/antd'
import { ArrayField, Field } from '@formily/react'
import { Space } from 'antd'
import { FC } from 'react'
import styles from './index.module.scss'

interface TitleContentTimeRangeArrayProps {
  name: string
  titlePlaceholder?: string
  contentPlaceholder?: string
}

export const TitleContentTimeRangeArray: FC<TitleContentTimeRangeArrayProps> = ({
  name,
  titlePlaceholder,
  contentPlaceholder,
}) => {
  return (
    <FormItem>
      <div className={styles.index}>
        <ArrayField name={name}>
          {(field) => (
            <ArrayBase>
              {field.value.map((_, index) => {
                return (
                  <Field key={index} name={index}>
                    <div className={styles.item}>
                      <div style={{ display: 'flex' }}>
                        <Field name="title" component={[Input, { placeholder: titlePlaceholder }]} />
                        <Space>
                          <ArrayItems.MoveUp index={index} />
                          <ArrayItems.Remove index={index} />
                        </Space>
                      </div>
                      <Space>
                        <Field name="startTime" component={[Input, { placeholder: '开始时间' }]} />
                        -
                        <Field name="endTime" component={[Input, { placeholder: '结束时间' }]} />
                      </Space>
                      <Field
                        name="content"
                        component={[Input.TextArea, { autoSize: true, placeholder: contentPlaceholder }]}
                      />
                    </div>
                  </Field>
                )
              })}

              <div className={styles.add}>
                <ArrayItems.Addition
                  title="添加"
                  defaultValue={{ title: '', content: '', startTime: '', endTime: '' }}
                />
              </div>
            </ArrayBase>
          )}
        </ArrayField>
      </div>
    </FormItem>
  )
}

TitleContentTimeRangeArray.defaultProps = {
  titlePlaceholder: '请输入标题',
  contentPlaceholder: '请输入内容',
}
