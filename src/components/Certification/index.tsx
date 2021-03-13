/* eslint-disable prefer-const */
import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as Style from './styles'

const images = [
  { id: 0, url: '/img/1687.jpg' },
  { id: 1, url: '/img/1.jpg' },
  { id: 2, url: '/img/1.jpg' },
  { id: 3, url: '/img/1687.jpg' },
  { id: 4, url: '/img/1687.jpg' },
  { id: 5, url: '/img/1.jpg' },
  { id: 6, url: '/img/1.jpg' }
]

interface ImageProps {
  id: number
  url: string
}
type FocusType = 'first' | 'center' | 'last'

const Certification = () => {
  const [isActive, setIsActive] = useState(0)
  const [filteredImage, setFilteredImage] = useState<ImageProps[]>([])
  const [isFocus, setIsFocus] = useState<FocusType>('first')

  useEffect(() => {
    let img = images.filter((_, i) => {
      if (isActive - 1 === i || isActive === i || isActive + 1 === i) {
        setIsFocus('center')
        return [images[isActive - 1], images[isActive], images[isActive + 1]]
      }
    })

    if (img.length === 2) {
      setIsFocus('first')
      img = [images[isActive], images[isActive + 1], images[isActive + 2]]
    } else if (isActive === images.length - 2) {
      img = [images[isActive - 2], images[isActive], images[isActive + 1]]
    }

    if (isActive === images.length - 1) setIsFocus('last')
    if (isActive === 0) setIsFocus('first')
    if (isActive !== images.length - 1) setFilteredImage(img)
  }, [isActive])

  const handleNextSlide = (id?: number): void => {
    console.log(id)
    if (id || id === 0) {
      if (id <= images.length) {
        setIsActive(id)
      }
    } else {
      if (isActive + 1 <= images.length - 1) {
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
    if (isActive === images.length - 1) {
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
            key={img.id}
            className={isActive === img.id ? 'active' : ''}
            onClick={() => handleNextSlide(img.id)}
          >
            <Image src={img.url} alt="" width={350} height={250} />
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
