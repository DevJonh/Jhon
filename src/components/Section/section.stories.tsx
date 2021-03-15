import { Meta, Story } from '@storybook/react/types-6-0'
import About from 'components/About'
import Formation from 'components/Formation'
import Skills from 'components/Skills'

import Section from '.'

export default {
  title: 'Section',
  component: Section
} as Meta

export const Basic: Story = (args) => (
  <Section title="Sobre" left id="sobre" {...args}>
    <About />
    <Skills />
    <Formation />
  </Section>
)
