import { Meta } from '@storybook/react'
import { SkillsProps } from 'types/api'

import Skills from '.'

export default {
  title: 'Skills',
  component: Skills
} as Meta

export const Basic = (args: SkillsProps[]) => <Skills {...args} />
