import React from 'react'
import Styled from './styled-components'

const AmenitiesCarousel = ({ children, classNames, ...props }) => {
	const settings = {
		dots: true,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		lazyLoad: true,
		slidesToScroll: 1,
		centerMode: true,
		responsive: [
			{
				breakpoint: 786,
				settings: {
					dots: false,
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<Styled.Carousel className={classNames} {...props} {...settings}>
			{children}
		</Styled.Carousel>
	)
}

export default AmenitiesCarousel
