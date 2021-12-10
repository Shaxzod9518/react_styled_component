import styled from 'styled-components'
import Slider from 'react-slick'

const Container = styled.div`
	position: relative;
`

const Carousel = styled(Slider)`
	max-width: 100%;

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
`

const Next = styled.div`
	width: 50px;
	height: 50px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 40px;
	transition: 0.3s ease-out;
	cursor: pointer;

	&:hover {
		transform: translate(10px, -50%);
	}

	@media (max-width: 856px) {
		width: 45px;
		height: 45px;
	}

	@media (max-width: 786px) {
		display: none;
	}
`
const Prev = styled.div`
	width: 50px;
	height: 50px;
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	left: 40px;
	transition: 0.3s ease-out;
	cursor: pointer;

	&:hover {
		transform: translate(-10px, -50%);
	}

	@media (max-width: 856px) {
		width: 45px;
		height: 45px;
	}

	@media (max-width: 786px) {
		display: none;
	}
`

const Styled = {
	Container,
	Carousel,
	Next,
	Prev,
}

export default Styled
