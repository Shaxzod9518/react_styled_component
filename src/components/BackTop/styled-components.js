import styled from 'styled-components'

const BackTopButton = styled.div`
	position: fixed;
	width: 40px;
	height: 40px;
	right: 25px;
	bottom: 120px;
	margin: 0;
	z-index: 10000;
	cursor: pointer;
	border: 1px solid black;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 16px;
	}

	@media only screen and (max-width: 786px) {
		right: 30px;
		bottom: 24px;
	}
`
const Styled = {
	BackTopButton,
}

export default Styled
