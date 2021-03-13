import { Meta, Story } from '@storybook/react/types-6-0'

import Formation from '.'

export default {
  title: 'Formation',
  component: Formation
} as Meta

export const Basic: Story = (args) => <Formation {...args} />
