import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa'
import { MdEmail, MdExpandLess } from 'react-icons/md'

import * as Style from './styles'
import Title from 'components/Title'
import { useRouter } from 'next/dist/client/router'

const Contato: React.FC = () => {
  const router = useRouter()

  const { slug } = router.query
  return (
    <Style.Wrapper>
      <Style.Header>
        <Title title="CONTATO" left />
        <p>
          Vamos trocar uma idéia. Fale comigo através das minhas redes sociais
          para trocarmos conhecimento, ou se precisar de ajuda com algum projeto
          ou se precisar de site web para você ou seu negócio, ou até mesmo se
          quiser bater um papo.
        </p>
      </Style.Header>
      <Style.MidiaContainer>
        <li>
          <Style.Midias
            rel="noreferrer"
            target="_blank"
            href="https://t.me/JonatasSenna"
          >
            <div>
              <FaTelegram size={'1.8rem'} />
            </div>
            <p>TELEGRAM</p>
          </Style.Midias>
        </li>
        <li>
          <Style.Midias
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jonatas-senna/"
          >
            <div>
              <FaLinkedinIn size={'1.8rem'} />
            </div>
            <p>LINKEDIN</p>
          </Style.Midias>
        </li>
        <li>
          <Style.Midias
            rel="noreferrer"
            target="_blank"
            href="https://github.com/DevJonh"
          >
            <div>
              <FaGithub size={'1.8rem'} />
            </div>
            <p>GITHUB</p>
          </Style.Midias>
        </li>
        <li>
          <Style.Midias
            rel="noreferrer"
            target="_blank"
            href="mailto:devjhon.senna@gmail.com"
          >
            <div>
              <MdEmail size={'1.8rem'} />
            </div>
            <p>E-MAIL</p>
          </Style.Midias>
        </li>
      </Style.MidiaContainer>
      <Link href={slug ? `/${slug}/` : '/'}>
        <Style.Top>
          <MdExpandLess size={'2rem'} />
        </Style.Top>
      </Link>
    </Style.Wrapper>
  )
}

export default Contato
