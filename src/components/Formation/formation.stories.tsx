import { Meta } from '@storybook/react'
import { FormationProps } from 'types/api'

import Formation from '.'

export default {
  title: 'Formation',
  component: Formation
} as Meta

export const Basic = (args: FormationProps[]) => <Formation {...args} />
