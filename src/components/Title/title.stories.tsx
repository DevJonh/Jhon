import { Meta, Story } from '@storybook/react'
import Title from '.'

export default {
  title: 'Title',
  component: Title
} as Meta

export const Basic: Story = (args) => (
  <Title left={false} title="Desenvolvedor Web | Frontend" {...args} />
)
