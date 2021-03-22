import { Meta, Story } from '@storybook/react/types-6-0'

import Projects from '.'

export default {
  title: 'Projects',
  component: Projects
} as Meta

export const Basic: Story = (args) => <Projects {...args} />
