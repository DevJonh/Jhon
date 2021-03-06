import * as Style from './styles'

export type TitleProps = {
  title: string
}

const Title = ({ title }: TitleProps) => <Style.Title>{title}</Style.Title>

export default Title
