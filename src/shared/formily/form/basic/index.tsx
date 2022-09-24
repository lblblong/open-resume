import { FormGrid, FormItem, Input } from '@formily/antd'
import { Field, VoidField } from '@formily/react'

export interface IBasicData {
  name: string
  gender: string
  age: string
  city: string
  phoneNumber: string
  email: string
}

export const BasicData = () => {
  return (
    <VoidField name="basic" decorator={[FormItem]}>
      <FormGrid maxColumns={3}>
        <Field name="name" component={[Input, { placeholder: '姓名' }]} />
        <Field name="gender" component={[Input, { placeholder: '性别' }]} />
        <Field name="age" component={[Input, { placeholder: '年龄' }]} />
        <Field name="city" component={[Input, { placeholder: '城市' }]} />
        <Field name="phoneNumber" component={[Input, { placeholder: '手机号' }]} />
        <Field name="email" component={[Input, { placeholder: '邮箱' }]} />
      </FormGrid>
    </VoidField>
  )
}
