import { Meta, Story } from '@storybook/react'

import Section from '.'

export default {
  title: 'Section',
  component: Section
} as Meta

export const Basic: Story = (args) => (
  <Section title="Sobre" left id="sobre" {...args}>
    <h2>Olá</h2>
  </Section>
)
