import styled from 'styled-components'

const PopupContainer = styled.div`
	position: fixed;
	top: ${(props) => (props.active ? '0' : '100%')};
	left: 0;
	z-index: 100001;
	background-color: white;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	transition: top 0.6s ease-in;
`

const Wrapper = styled.div`
	position: relative;
	max-width: 805px;
	width: 100%;
	padding-top: 100px;
	overflow-y: auto;
	overflow-x: visible;

	&::-webkit-scrollbar {
		width: 0;
	}

	@media only screen and (max-width: 786px) {
		padding-right: 16px;
		padding-left: 16px;
		padding-top: 60px;
	}
`
const PopupClose = styled.img`
	width: 32px;
	color: #838383;
	position: absolute;
	right: 0;
	top: 100px;
	cursor: pointer;
	transition: transform 0.7s ease-in-out;

	&:hover {
		transform: rotate(360deg);
	}

	@media only screen and (max-width: 786px) {
		width: 24px;
		right: 16px;
		top: 24px;
	}
`

const Styled = {
	Wrapper,
	PopupContainer,
	PopupClose,
}

export default Styled
