import { Meta } from '@storybook/react'
import { ProjectsProps } from 'types/api'

import Projects from '.'

export default {
  title: 'Projects',
  component: Projects
} as Meta

export const Basic = (args: ProjectsProps[]) => <Projects {...args} />
