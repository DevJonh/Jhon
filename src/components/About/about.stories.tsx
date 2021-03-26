import { Meta, Story } from '@storybook/react'

import About from '.'

export default {
  title: 'About',
  component: About
} as Meta

export const Basic: Story = (args) => <About {...args} />
