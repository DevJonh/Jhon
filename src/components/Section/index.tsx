import Title from 'components/Title'
import * as Style from './styles'

type SectionProps = {
  children: React.ReactNode
  id: string
  title: string
  left: boolean
}

const Section = ({ children, id, title, left }: SectionProps) => (
  <Style.Wrapper id={id}>
    <Title left={left} title={title.toUpperCase()} />
    {children}
  </Style.Wrapper>
)

export default Section
