import React from 'react'
import Styled from './styled-components'
import { data } from './data'
import { useTranslation } from 'react-i18next'

const Header = () => {
	const { i18n } = useTranslation()
	const trans = data[i18n.language]
	const breakpoints = [
		'(min-width: 1400px)',
		'(min-width: 1400px)',
		'(min-width: 1200px)',
		'(min-width: 1200px)',
		'(min-width: 992px)',
		'(min-width: 992px)',
		'(min-width: 786px)',
		'(min-width: 786px)',
		'(min-width: 576px)',
		'(min-width: 576px)',
		'(max-width: 576px)',
		'(max-width: 576px)',
	]

	return (
		<Styled.ImagesContainer>
			<Styled.Carousel>
				{trans.map((item, index) => (
					<Styled.Slide key={index.toString()}>
						<Styled.TextContainer>
							<div>
								<Styled.Title className="title">
									<Styled.WaveImgLeft
										src="./images/header/header-wave.svg"
										alt=""
										className="wave-left"
									/>
									{item.caption}
									<Styled.WaveImgRight
										src="./images/header/header-wave.svg"
										alt=""
										className="wave-right"
									/>
								</Styled.Title>
								<Styled.Subtitle className="subtitle">
									{item.title}
								</Styled.Subtitle>
							</div>
						</Styled.TextContainer>
						<picture>
							{item.images.map((image, index) => (
								<source
									key={index.toString()}
									srcSet={image}
									media={breakpoints[index]}
								/>
							))}
							<Styled.Img src={item.images[1]} alt={item.title} />
						</picture>
					</Styled.Slide>
				))}
			</Styled.Carousel>
		</Styled.ImagesContainer>
	)
}
export default Header
