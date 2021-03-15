import * as Style from './styles'

export type ButtonProps = {
  label: string
  medium: boolean
}

const Button = ({ label, medium }: ButtonProps) => (
  <Style.Button medium={medium}>{label.toUpperCase()}</Style.Button>
)

export default Button
