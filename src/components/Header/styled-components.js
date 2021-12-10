import styled, { keyframes } from 'styled-components'
import HeaderCarousel from '../HeaderCarousel'

const right = keyframes`
    0% {
        transform: translateX(60px);
    }

    100% {
        transform: translateX(0);
    }
`

const left = keyframes`
	0% {
        transform: translateX(-60px);
    }
    100% {
        transform: translateX(0);
    }
`

const top = keyframes`
    0% {
        transform: translateY(-40px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
    }
`

const bottom = keyframes`
    0% {
        transform: translateY(-60px);
    }
    100% {
        transform: translateY(0);
	}
`

const ImagesContainer = styled.div`
	max-width: 100%;
	margin: 0 40px;
	position: relative;
	overflow: hidden;

	@media (max-width: 786px) {
		padding: 0 !important;
		margin: 0 20px;
	}
`

const Carousel = styled(HeaderCarousel)`
	.slick-current {
		.wave-right {
			animation: ${right} 0.7s alternate;
		}

		.wave-left {
			animation: ${left} 0.7s alternate;
		}

		.title {
			animation: ${top} 0.7s alternate;
		}

		.subtitle {
			animation: ${bottom} 0.7s alternate;
		}
	}
`

const Img = styled.img`
	max-width: 100%;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const Slide = styled.div`
	position: relative;
	height: 85vh;

	@media only screen and (max-width: 786px) {
		height: 500px;
	}
`

const TextContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	text-align: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
`

const Title = styled.h5`
	font-family: 'Open Sans', sans-serif;
	text-align: center;
	font-size: 25px;
	justify-content: center;
	color: white;
	font-style: normal;
	margin-bottom: 16px;
	font-weight: 400;
	display: flex;

	@media (max-width: 996px) {
		font-size: 25px;
	}

	@media (max-width: 856px) {
		font-size: 22px;
	}

	@media (max-width: 600px) {
		font-size: 18px;
	}

	@media (max-width: 450px) {
		font-size: 16px;
	}
`
const WaveImgLeft = styled.img`
	width: 44px;
	height: 8px;
	margin: 13px 24px 0 10px;

	@media (max-width: 600px) {
		width: 35px;
		height: 6px;
		margin: 10px 10px 0 10px;
	}

	@media (max-width: 450px) {
		width: 30px;
		height: 6px;
		margin: 8px 8px 0 8px;
	}
`

const WaveImgRight = styled.img`
	width: 44px;
	height: 8px;
	margin: 13px 10px 0 24px;

	@media (max-width: 600px) {
		width: 35px;
		height: 6px;
		margin: 10px 10px 0 10px;
	}

	@media (max-width: 450px) {
		width: 30px;
		height: 6px;
		margin: 8px 8px 0 8px;
	}
`
const Subtitle = styled.h1`
	font-family: 'Open Sans', sans-serif;
	max-width: 100%;
	width: 100%;
	margin: 0 auto;
	color: white;
	font-size: 130px;
	font-weight: 700;
	text-transform: uppercase;

	@media (max-width: 1542px) {
		max-width: 100%;
		font-size: 120px;
	}

	@media (max-width: 1440px) {
		max-width: 100%;
		font-size: 100px;
	}

	@media (max-width: 996px) {
		font-size: 80px;
	}

	@media (max-width: 856px) {
		font-size: 60px;
	}

	@media (max-width: 600px) {
		font-size: 40px;
	}
`
const Circle = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	width: 100%;
	justify-content: center;
	display: flex;
`
const Span = styled.span`
	display: none;
	margin-left: 20px;
	border-radius: 50px;
	transition: opacity 0.3s ease;
	width: 13px;
	height: 13px;
	border: 2px solid rgb(255, 255, 255);

	&:focus,
	&:hover {
		background: white;
	}

	@media (max-width: 786px) {
		display: block;
	}
`

const Styled = {
	ImagesContainer,
	Carousel,
	Img,
	Circle,
	Slide,
	TextContainer,
	Title,
	WaveImgLeft,
	WaveImgRight,
	Subtitle,
	Span,
}
export default Styled
