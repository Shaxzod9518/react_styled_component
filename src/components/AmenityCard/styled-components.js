import styled from 'styled-components'

const CardWrapper = styled.div`
	width: 100%;
	background-color: #ffffff;
	overflow: hidden;
	cursor: pointer;
`

const Ratio = styled.div`
	background: white;
	position: relative;
`

const CardImage = styled.div`
	padding-bottom: 17px;
	width: 160px;
	margin: 26px auto 0;
	transition: 0.5s;
	display: block;

	&:hover {
		transform: scale(1.1);
	}
`
const CardContent = styled.div`
	width: 100%;
	padding: 20px 30px ;
	background-color: #ffffff;
`
const CardTitle = styled.h3`
	font-family: 'myraidPro-BOLD';
	font-size: 24px;
	font-weight: 700;
	color: #2d2e32;
	transition: 0.5s;

	&:hover {
		color: #103260;
		transition: 0.5s;
	}
`

const CardAbout = styled.p`
	font-family: 'Open sans', sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 30px;
	color: #7b7b7b;
	margin: 20px 0;
`

const Styled = {
	CardWrapper,
	CardContent,
	Ratio,
	CardImage,
	CardTitle,
	CardAbout,
}

export default Styled
