import { createForm, Form, FormPath, onFieldInputValueChange } from '@formily/core'
import { FormProvider } from '@formily/react'
import { toJS } from 'mobx'
import { ElementType, ReactNode } from 'react'
import { TemplateProvider } from 'src/templates'
import { BaseTemplate } from 'src/templates/template'

export abstract class FormilyTemplate<D, C> extends BaseTemplate<D, C> {
  constructor() {
    super()
    this.form = createForm({
      initialValues: this.data as any,
      effects: () => {
        onFieldInputValueChange('*', (field) => {
          FormPath.setIn(this.data, field.path, field.value)
        })
      },
    })

    this.provider = ({ children }: { children: ReactNode }) => {
      return (
        <FormProvider form={this.form}>
          <TemplateProvider value={this}>{children}</TemplateProvider>
        </FormProvider>
      )
    }
  }

  importData(data?: D): void {
    if (data) {
      this.data = data
    } else {
      this.data = toJS(this.defaultData)
    }

    this.form.setValues(this.data)
  }

  provider: ElementType<{ children: ReactNode }>

  form: Form
}
