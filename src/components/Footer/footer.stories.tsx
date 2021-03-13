import { Meta, Story } from '@storybook/react/types-6-0'
import Contato from 'components/Contato'

import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Basic: Story = (args) => (
  <Footer {...args}>
    <Contato />
  </Footer>
)
