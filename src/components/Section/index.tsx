import Title from 'components/Title'
import { ReactElement } from 'react'
import * as Style from './styles'

type SectionProps = {
  children: React.ReactNode | ReactElement
  id: string
  title: string
  left: boolean
}

const Section = ({ children, id, title, left }: SectionProps) => (
  <Style.Wrapper id={id}>
    <Title left={left} title={title.toUpperCase()} />
    <Style.Content>{children}</Style.Content>
  </Style.Wrapper>
)

export default Section
