import { Meta, Story } from '@storybook/react'
import Contato from 'components/Contato'

import Footer from './index'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Basic: Story = (args) => (
  <Footer inverter={false} {...args}>
    <Contato />
  </Footer>
)
