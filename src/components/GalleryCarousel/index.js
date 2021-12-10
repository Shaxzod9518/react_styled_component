import React from 'react'
import Styled from './styled-component.js'

const GalleryCarousel = () => {
	const settings = {
		centerMode: true,
		infinite: true,
		lazyLoad: true,
		slidesToShow: 3,
		centerPadding: '0',
		speed: 800,
		autoplay: true,
		focusOnSelect: true,
		pauseOnHover: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 756,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					focusOnSelect: false,
					pauseOnHover: false,
				},
			},
		],
	}

	const breakpoints = [
		'(min-width: 1200px)',
		'(min-width: 1200px)',
		'(min-width: 576px)',
		'(min-width: 576px)',
		'(max-width: 576px)',
		'(max-width: 576px)',
	]

	const types = ['.webp', '.jpg', '-768.webp', '-768.jpg', '-576.webp', '-576.jpg']

	return (
		<Styled.Carousel {...settings}>
			{[...Array(21).keys()].map((item) => (
				<picture>
					{types.map((type, index) => (
						<source
							key={index.toString()}
							srcSet={`/images/gallery/slide-${item + 1}${type}`}
							media={breakpoints[index]}
						/>
					))}
					<Styled.Image src={`/images/gallery/slide-${item + 1}.jpg`} />
				</picture>
			))}
			<Styled.Image src="./images/gallery/slide-2.jpg" />
			<Styled.Image src="./images/gallery/slide-3.jpg" />
			<Styled.Image src="./images/gallery/slide-4.jpg" />
			<Styled.Image src="./images/gallery/slide-5.jpg" />
			<Styled.Image src="./images/gallery/slide-6.jpg" />
			<Styled.Image src="./images/gallery/slide-7.jpg" />
			<Styled.Image src="./images/gallery/slide-8.jpg" />
			<Styled.Image src="./images/gallery/slide-9.jpg" />
			<Styled.Image src="./images/gallery/slide-10.jpg" />
			<Styled.Image src="./images/gallery/slide-11.jpg" />
			<Styled.Image src="./images/gallery/slide-12.jpg" />
			<Styled.Image src="./images/gallery/slide-13.jpg" />
			<Styled.Image src="./images/gallery/slide-14.jpg" />
			<Styled.Image src="./images/gallery/slide-15.jpg" />
			<Styled.Image src="./images/gallery/slide-16.jpg" />
			<Styled.Image src="./images/gallery/slide-17.jpg" />
			<Styled.Image src="./images/gallery/slide-18.jpg" />
			<Styled.Image src="./images/gallery/slide-19.jpg" />
			<Styled.Image src="./images/gallery/slide-20.jpg" />
			<Styled.Image src="./images/gallery/slide-21.jpg" />
		</Styled.Carousel>
	)
}

export default GalleryCarousel
