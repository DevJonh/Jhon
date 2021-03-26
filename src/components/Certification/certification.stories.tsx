import { Meta } from '@storybook/react/'
import Section from 'components/Section'
import { CertificateProps } from 'types/api'

import Certification from '.'

export default {
  title: 'Certification',
  component: Certification
} as Meta

export const Basic = (args: CertificateProps[]) => (
  <Section left id="certificado" title="CERTIFICADOS">
    <Certification {...args} />
  </Section>
)
