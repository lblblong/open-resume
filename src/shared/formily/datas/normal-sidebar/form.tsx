import { Form, Input } from '@formily/antd'
import { Field } from '@formily/react'
import { BasicData } from 'src/shared/formily/form/basic'
import { TitleContentArray } from 'src/shared/formily/form/titleContentArray'
import { TitleContentTimeRangeArray } from 'src/shared/formily/form/titleContentTimeRangeArray'

export const DataForm = () => {
  return (
    <Form layout="vertical">
      <h3>基础信息</h3>
      <BasicData />

      <h3>侧栏配置</h3>
      <TitleContentArray name="sidebar" />

      <h3>工作经历</h3>
      <TitleContentTimeRangeArray name="workingHistory" />

      <h3>自我评价</h3>
      <Field name="introduce" component={[Input.TextArea, { autoSize: true }]} />
    </Form>
  )
}
