import { Meta, Story } from '@storybook/react/types-6-0'

import Title from '.'

export default {
  title: 'Title',
  component: Title
} as Meta

export const Basic: Story = (args) => (
  <Title title="Desenvolvedor Web | Frontend" {...args} />
)
