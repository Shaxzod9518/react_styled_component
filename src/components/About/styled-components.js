import styled, { keyframes, css } from 'styled-components'
import Container from '../Container'

const ContainerFluid = styled(Container)`
	padding: 0 40px;

	@media only screen and (max-width: 1302px) {
		padding: 0;
	}
`

const AboutWrapper = styled.div`
	max-width: 1300px;
	margin: 100px 0;

	@media only screen and (max-width: 786px) {
		margin: 60px 0;
	}
`

const AboutButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	column-gap: 32px;
	row-gap: 32px;

	@media only screen and (max-width: 786px) {
		column-gap: 12px;
		row-gap: 16px;

		&::-webkit-scrollbar {
			width: 0;
		}
	}
`

const Button = styled.button`
	min-width: 144px;
	font-size: 14px;
	line-height: 14px;
	font-weight: 600;
	padding: 12px 16px;
	background: ${(props) => (props.active ? '#103260' : 'transparent')};
	color: ${(props) => (props.active ? '#ffffff' : '#2d2e32')};
	cursor: pointer;
	text-transform: uppercase;
	letter-spacing: 1px;
	white-space: nowrap;
	position: relative;
	overflow: hidden;
	outline: none;

	&:hover {
		span {
			color: white;
			z-index: 999;
		}
	}

	&::after,
	&::before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		top: 0;
		bottom: 0;
		right: 0;
		background: #103260;
		z-index: 0;
		opacity: 1;
	}

	&::before {
		transform: translateX(-101%);
		z-index: -1;
	}

	&:hover:before {
		transform: translateX(0);
		transition: transform 400ms ease;
	}

	&::after {
		z-index: -1;
		transform: translateX(101%);
		transition: transform 400ms ease;
	}

	&:hover:after {
		opacity: -1;
		transform: translateX(0);
		transition: transform 400ms 400ms ease;
	}
`

const AboutContent = styled.div`
	margin-top: 105px;
	display: flex;

	@media (max-width: 786px) {
		display: block;
		margin: 48px auto;
	}
`

const AboutTexts = styled.div`
	width: 50%;
	padding-right: 100px;

	@media only screen and (max-width: 786px) {
		padding-right: 0;
		width: 100%;
	}
`
const AboutTitle = styled.h2`
	font-family: 'myraidPro';
	font-size: 60px;
	font-weight: 400;
	line-height: 1.067em;
	//word-break: break-all;
	color: #2d2e32;
	margin-bottom: 32px;
	text-transform: lowercase;

	&::first-letter {
		text-transform: uppercase;
	}

	@media only screen and (max-width: 786px) {
		text-align: center;
		font-size: 50px;
	}
`
const AboutComment = styled.p`
	font-family: 'myraidPro';
	font-size: 22px;
	font-weight: 400;
	line-height: 32px;
	font-style: italic;
	color: #2d2e32;
	margin: 20px 0;
`
const AboutAbout = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 30px;
	color: #7b7b7b;
	margin-top: 18px;
`

const animate = keyframes`
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const AboutImages = styled.div`
	width: 50%;
	animation: ${props => props.animate && css`${animate} .5s linear both`};

	@media only screen and (max-width: 786px) {
		width: 100%;
		margin-top: 24px;
	}
`

const AboutImg = styled.img`
	width: 100%;
`

const Styled = {
	ContainerFluid,
	AboutWrapper,
	AboutButtons,
	Button,
	AboutContent,
	AboutTexts,
	AboutTitle,
	AboutComment,
	AboutAbout,
	AboutImages,
	AboutImg,
}

export default Styled
