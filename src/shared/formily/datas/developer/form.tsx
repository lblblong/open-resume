import { Form, FormGrid, FormItem } from '@formily/antd'
import { Field } from '@formily/react'
import { Input } from 'antd'
import { BasicData } from 'src/shared/formily/form/basic'
import { TitleContentArray } from 'src/shared/formily/form/titleContentArray'
import { TitleContentTimeRangeArray } from 'src/shared/formily/form/titleContentTimeRangeArray'

export const DataForm = () => {
  return (
    <Form layout="vertical">
      <h3>基础信息</h3>
      <BasicData />

      <h3>求职意向</h3>
      <Field name="target" component={[Input]} decorator={[FormItem]} />

      <h3>教育信息</h3>
      <Field name="education" decorator={[FormItem]}>
        <FormGrid>
          <Field name="schoolName" component={[Input, { placeholder: '学校' }]} />
          <Field name="major" component={[Input, { placeholder: '专业' }]} />
          <Field name="graduationTime" component={[Input, { placeholder: '毕业时间' }]} />
        </FormGrid>
      </Field>

      <h3>简介</h3>
      <Field name="introduce" component={[Input.TextArea, { autoSize: true }]} decorator={[FormItem]} />

      <h3>工作经历</h3>
      <TitleContentTimeRangeArray name="workingHistory" titlePlaceholder="公司名称" contentPlaceholder="工作内容" />

      <h3>个人项目</h3>
      <TitleContentArray name="projects" titlePlaceholder="项目名称" contentPlaceholder="项目描述" />

      <h3>Github 链接</h3>
      <Field name="github" component={[Input]} decorator={[FormItem]} />

      <h3>关于我</h3>
      <Field name="aboutMe" component={[Input.TextArea, { autoSize: true }]} decorator={[FormItem]} />
    </Form>
  )
}
