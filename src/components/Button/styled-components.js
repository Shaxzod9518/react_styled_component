import styled from 'styled-components'

const Button = styled.button`
	display: block;
	max-width: 300px;
	width: 100%;
	text-align: center;
	background: ${(props) =>
		props.primary ? '#103260' : 'transparent'};
	border: 1px solid
		${(props) => (props.primary ? '#103260' : '#000')};
	color: ${(props) => (props.primary ? '#fff' : '#000')};
	font-weight: 600;
	padding: 18px 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 15px;
	cursor: pointer;
	user-select: none;

	&:hover {
		background: ${(props) =>
			props.primary ? '#0a203d' : 'transparent'};
	}
`

const Styled = {
    Button
}

export default Styled