import { Meta, Story } from '@storybook/react/types-6-0'

import Heading from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Basic: Story = (args) => <Heading title="HEADING" {...args} />
