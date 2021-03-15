import { Meta, Story } from '@storybook/react/types-6-0'
import Section from 'components/Section'

import Certification from '.'

export default {
  title: 'Certification',
  component: Certification
} as Meta

export const Basic: Story = (args) => (
  <Section left id="certificado" title="CERTIFICADOS">
    <Certification {...args} />
  </Section>
)
