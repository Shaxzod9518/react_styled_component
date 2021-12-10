import styled from 'styled-components'
import Slider from 'react-slick'

const Carousel = styled(Slider)`
	max-width: 100%;
	width: 100%;

	.slick-list {
		margin-left: -24px;
	}

	.slick-slide {
		padding: 0 16px;
	}

	.slick-dots {
		bottom: -46px;
		transform: translateY(100%);
	}

	.slick-dots li {
		width: 48px;
		height: 2px;
	}
	.slick-dots button {
		width: 48px;
		height: 2px;
	}
	.slick-dots button::before {
		content: '';
		width: 48px;
		height: 2px;
		margin: 0 9px;
		border-radius: 0;
		background-color: #a1a4a8;
	}
	.slick-dots .slick-active button::before {
		background-color: #ffffff;
	}

	@media only screen and (max-width: 786px) {
		.slick-slide {
			padding: 0 8px;
		}

		.jUxdrH .slick-slide:first-child {
			margin-left: 0;
		}
	}
`

const Styled = {
	Carousel,
}

export default Styled
