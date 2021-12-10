import styled from 'styled-components'
import Slider from 'react-slick'

const Carousel = styled(Slider)`
	padding-left: -6%;
	padding-right: -6%;
	padding-top: 180px;
	padding-bottom: 180px;

	
	@media only screen and (min-width: 768px) {
		.slick-list {
			padding-top: 5% !important;
			padding-bottom: 5% !important;
		}
		
		.slick-slide div {
			position: relative;
			transition: all 0.3s ease;
		}

		.slick-slide div::after {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			content: '';
			background-color: rgba(0, 0, 0, 0.4);
			transition: 0.5s 0.5s background-color ease-in;
		}

		.slick-current div {
			width: 100%;
			height: 100%;
			object-fit: contain;
			position: relative;
			opacity: 1;
			transform: scale(1.8);
			transition: 0.4s 0.5s transform ease-in;
			z-index: 1;
		}

		.slick-current div::after {
			background-color: rgba(0, 0, 0, 0);
		}
	}

	@media only screen and (max-width: 768px) {
		margin-left: 0;
		margin-right: 0;
		padding-top: 0;
		padding-bottom: 0;

		.slick-list {
			padding-top: 0;
			padding-bottom: 0;
		}

		.slick-center div {
			transform: none;
			transition: none;
		}
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	display: block !important;
`

const Styled = {
	Image,
	Carousel,
}

export default Styled
