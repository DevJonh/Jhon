/* eslint-disable prefer-const */
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { CertificateProps } from 'types/api'
import * as Style from './styles'

type FocusType = 'first' | 'center' | 'last'

const Certification = (props: CertificateProps[]) => {
  const [isActive, setIsActive] = useState(0)
  const [filteredImage, setFilteredImage] = useState<CertificateProps[]>([])
  const [isFocus, setIsFocus] = useState<FocusType>('first')

  const certificate = useMemo(() => {
    return Object.values(props)
  }, [props])

  useEffect(() => {
    let img = certificate.filter((cert, i) => {
      if (isActive - 1 === i || isActive === i || isActive + 1 === i) {
        setIsFocus('center')
        return [
          certificate[isActive - 1],
          certificate[isActive],
          certificate[isActive + 1]
        ]
      }
    })

    if (img.length === 2) {
      setIsFocus('first')
      img = [
        certificate[isActive],
        certificate[isActive + 1],
        certificate[isActive + 2]
      ]
    } else if (isActive === certificate.length - 2) {
      img = [
        certificate[isActive - 2],
        certificate[isActive],
        certificate[isActive + 1]
      ]
    }

    if (isActive === certificate.length - 1) setIsFocus('last')
    if (isActive === 0) setIsFocus('first')
    if (isActive !== certificate.length - 1) setFilteredImage(img)
  }, [isActive, certificate])

  const handleNextSlide = (id?: number): void => {
    if (id || id === 0) {
      if (id <= certificate.length) {
        setIsActive(id - 1)
      }
    } else {
      if (isActive + 1 <= certificate.length - 1) {
        setIsActive(isActive + 1)
      } else {
        return
      }
    }
  }
  const handlePreviousSlide = (): void => {
    if (isActive - 1 >= 0) {
      setIsActive(isActive - 1)
    }
  }
  const handleViewSlideCondition = (): void => {
    if (isActive === certificate.length - 1) {
      setIsActive(isActive - 1)
    } else if (isActive === 0) {
      setIsActive(isActive + 1)
    }
  }
  return (
    <>
      <Style.Wrapper>
        {/*<img className="detail" src="img/detail.png" alt="detail" />*/}
        {filteredImage.map((img) => (
          <Style.ContainerImage
            key={img.certification.id}
            className={isActive + 1 === img.count ? 'active' : ''}
            onClick={() => handleNextSlide(img.count)}
          >
            <Image
              src={img.certification.url}
              alt=""
              width={350}
              height={250}
              loading="lazy"
            />
          </Style.ContainerImage>
        ))}
      </Style.Wrapper>
      <Style.SlideStyle>
        <button
          className={isFocus === 'first' ? 'focus' : ''}
          onClick={() => handlePreviousSlide()}
        ></button>
        <button
          className={isFocus === 'center' ? 'focus' : ''}
          onClick={() => handleViewSlideCondition()}
        ></button>
        <button
          className={isFocus === 'last' ? 'focus' : ''}
          onClick={() => handleNextSlide()}
        ></button>
      </Style.SlideStyle>
    </>
  )
}

export default Certification
