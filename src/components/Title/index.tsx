import * as Style from './styles'

export type TitleProps = {
  title: string
  left: boolean
}

const Title = ({ title, left }: TitleProps) => (
  <Style.Title left={left}>{title}</Style.Title>
)

export default Title
