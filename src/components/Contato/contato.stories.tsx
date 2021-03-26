import { Meta, Story } from '@storybook/react'

import Contato from '.'

export default {
  title: 'Contato',
  component: Contato
} as Meta

export const Basic: Story = (args) => <Contato {...args} />
