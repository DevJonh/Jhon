import { Meta, Story } from '@storybook/react/types-6-0'

import Contato from '.'

export default {
  title: 'Contato',
  component: Contato
} as Meta

export const Basic: Story = (args) => <Contato {...args} />
