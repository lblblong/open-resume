import { DeveloperConcise1Template } from './developer-concise-1'
import { DeveloperConcise2Template } from './developer-concise-2'
import { SimpleOnePage1Template } from './simple-one-page-1'
import { SimpleOnePage2Template } from './simple-one-page-2'
import { BaseTemplate } from './template'

export { TemplateProvider, useTemplate } from './template'

export const templates: BaseTemplate[] = [
  new DeveloperConcise1Template(),
  new DeveloperConcise2Template(),
  new SimpleOnePage1Template(),
  new SimpleOnePage2Template(),
]
