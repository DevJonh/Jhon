import * as Style from './styles'

export type ButtonProps = {
  label: string
}

const Button = ({ label }: ButtonProps) => (
  <Style.Button>{label.toUpperCase()}</Style.Button>
)

export default Button
