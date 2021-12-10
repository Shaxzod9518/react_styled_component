import React, { useRef } from 'react'
import Styled from './styled-components'
import Next from '../Icons/Next'
import Prev from '../Icons/Prev'

const HeaderCarousel = ({ children, classNames, ...props }) => {
	const slider = useRef()

	const settings = {
		arrows: false,
		speed: 800,
		slidesToShow: 1,
		lazyLoad: true,
		slidesToScroll: 1,
		fade: true,
	}

	return (
		<Styled.Container>
			<Styled.Carousel
				ref={slider}
				className={classNames}
				{...props}
				{...settings}
			>
				{children}
			</Styled.Carousel>
			<Styled.Next onClick={() => slider.current.slickNext()}>
				<Next />
			</Styled.Next>

			<Styled.Prev onClick={() => slider.current.slickPrev()}>
				<Prev />
			</Styled.Prev>
		</Styled.Container>
	)
}

export default HeaderCarousel
