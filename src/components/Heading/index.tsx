import * as Style from './styles'

type HeadingProps = {
  title: string
  slogan?: string
  left?: boolean
}

const Heading = ({ title, slogan = '', left }: HeadingProps) => (
  <Style.Wrapper left={left} slogan={slogan}>
    <h2>{title.toUpperCase()}</h2>
    {slogan && <p>{slogan}</p>}
  </Style.Wrapper>
)

export default Heading
