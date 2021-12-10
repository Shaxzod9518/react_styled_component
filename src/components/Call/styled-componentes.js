import styled from 'styled-components'

const Container = styled.div``
const Icon = styled.div`
	position: fixed;
	left: 30px;
	bottom: 30px;
	margin: 0;
	z-index: 10000;
	width: 70px;
	height: 70px;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #103260;
	animation: animate 2s infinite, pulse-animation 2s infinite;
	transition: 1s animation ease-in-out;
	animation-timing-function: ease-in-out;
	cursor: pointer;

  @media only screen and (max-width: 786px) {
    right: 24px;
    bottom: 24px;
    width: 50px;
    height: 50px;
  }
  
	@keyframes animate {
		0% {
			transform: rotate(-7deg);
		}
		25% {
			transform: rotate(3deg);
		}
		50% {
			transform: rotate(-7deg);
		}
		100% {
			transform: rotate(3deg);
		}
	}

	@keyframes pulse-animation {
		0% {
			box-shadow: 0 0 0 0 rgba(16, 50, 96, 0.99);
		}
		100% {
			box-shadow: 0 0 0 20px rgba(16, 50, 96, 0);
		}
	}

	img {
		width: 30px;
		height: 30px;
	}
`

const Styled = {
	Container,
	Icon,
}
export default Styled
