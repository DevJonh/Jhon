import Link from 'next/link'
import * as Style from './styles'

export type ButtonProps = {
  label: string
  medium: boolean
  href?: string
}

const Button = ({ label, medium, href }: ButtonProps) => {
  return href ? (
    <Link href={href} passHref>
      <Style.Button as={'a'} medium={medium}>
        {label.toUpperCase()}
      </Style.Button>
    </Link>
  ) : (
    <Style.Button medium={medium}>{label.toUpperCase()}</Style.Button>
  )
}
export default Button
