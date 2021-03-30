import { useMemo } from 'react'
import { FormationProps } from 'types/api'
import * as Style from './styles'

const Formation = (props: FormationProps[]) => {
  const formations = useMemo(() => {
    return Object.values(props)
  }, [props])
  return (
    <Style.Wrapper>
      <img src="/img/bg-formation.png" alt="details" loading="lazy" />
      <img src="/img/bg-formation-top.png" alt="details" loading="lazy" />
      <h2>FORMAÇÕES</h2>
      <div className="container-history">
        {formations.map((formation) => (
          <div key={formation.id} className="history">
            <div>
              <strong>{formation.period}</strong>
              <span>{formation.college.toUpperCase()}</span>
              <p className="course">{formation.course}</p>
              <p>{formation.formationType}</p>
            </div>
            <div className="container-marker">
              <span className="marker"></span>
            </div>
          </div>
        ))}
      </div>
    </Style.Wrapper>
  )
}

export default Formation
