import styled from 'styled-components'

const Title = styled.h2`
	font-size: 60px;
	line-height: 1.067em;
	font-family: 'myraidPro';
	font-weight: 400;
	color: #303030;
	text-align: center;
	margin-bottom: 90px;

	@media only screen and (max-width: 768px) {
		font-size: 50px;
		margin-top: 90px;
	}

	svg {
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 28px;
	}
`

const ImageMapContainer = styled.div`
	width: 100%;
	max-width: 1532px;
	margin: 0 auto;
	position: relative;
	display: flex;
	gap: 40px;

	@media only screen and (max-width: 1550px) {
		max-width: 1200px;
		margin: 0 auto;
	}

	@media only screen and (max-width: 816px) {
		display: block;
	}

	svg {
		width: 50%;
		display: block;

		@media only screen and (max-width: 816px) {
			width: 100%;
			margin-top: 20px;
		}

		img {
			width: 600px;
		}
	}

	svg.layout {
		@media only screen and (max-width: 816px) {
			width: calc(100% - 32px);
			margin-left: auto;
			margin-right: auto;
		}
	}
`
const ImageTag1 = styled.div`
	display: flex;
	position: absolute;
	top: 24%;
	left: 15%;
	background-color: #fff;
	padding: 12px 20px;
	box-shadow: 0 4px 26px rgba(0, 0, 0, 0.13);
	border-radius: 50px;

	@media only screen and (max-width: 1100px) {
		left: 15%;
		top: 29%;
	}
	@media only screen and (max-width: 1000px) {
		font-size: 14px;
		padding: 8px 16px;
	}
	@media only screen and (max-width: 816px) {

	@media (max-width: 1100px) {
		left: 15%;
		top: 29%;
	}

	@media (max-width: 816px) {
		top: 13%;
		left: 34%;
		font-size: 10px;
		padding: 8px 16px;
	}
	@media only screen and (max-width: 500px) {
		top: 12%;
	}
	@media only screen and (max-width: 400px) {
		top: 11%;
		left: 32%;
	}
	@media only screen and (max-width: 360px) {

	@media (max-width: 500px) {
		top: 12%;
	}

	@media (max-width: 400px) {
		top: 11%;
		left: 32%;
	}
	
	@media (max-width: 360px) {
		top: 10%;
		left: 29%;
	}
`
const ImageTag2 = styled.div`
	display: flex;
	position: absolute;
	top: 24%;
	left: 35%;
	background-color: #fff;
	padding: 12px 20px;
	box-shadow: 0 4px 26px rgba(0, 0, 0, 0.13);
	border-radius: 50px;
	@media only screen and (max-width: 1100px) {
		left: 35%;
		top: 28%;
	}
	@media only screen and (max-width: 1000px) {
		font-size: 14px;
		padding: 8px 16px;
	}
	@media only screen and (max-width: 816px) {
		top: 13%;
		left: 75%;
		font-size: 10px;
		padding: 8px 16px;
	}

	@media only screen and (max-width: 500px) {
		top: 12%;
	}

	@media only screen and (max-width: 400px) {
		top: 11%;
	}
	@media only screen and (max-width: 360px) {
		top: 10%;
		left: 72%;
	}
`
const SaleIcon = styled.img`
	display: block;
	margin-right: 10px;
	@media only screen and (max-width: 840px) {
		width: 14px;
		margin-right: 6px;
	}
`
const FloorRoom1 = styled.p`
	font-weight: 500;
	font-size: 14px;
	border-bottom: 1px solid #e8e8e8;
	padding: 8px 0 10px;
	@media only screen and (max-width: 840px) {
		font-size: 10px;
		padding: 6px 0 8px;
	}
	@media only screen and (max-width: 545px) {
		font-size: 8px;
	}
`
const FloorRoom2 = styled.p`
	font-weight: 500;
	font-size: 14px;
	padding: 8px 0 10px;
	@media only screen and (max-width: 840px) {
		font-size: 10px;
		padding: 6px 0 8px;
	}
	@media only screen and (max-width: 545px) {
		font-size: 8px;
	}
`
const FloorMapOne = styled.h3`
	position: absolute;
	top: 58%;
	left: 65%;
	font-weight: 500;
	font-size: 20px;

	@media only screen and (max-width: 1000px) {
		font-size: 16px;
	}
	@media only screen and (max-width: 816px) {
		font-size: 16px;
		top: 80%;
		left: 31%;
	}
`
const FloorMapSecond = styled.h3`
	position: absolute;
	top: 97%;
	left: 88%;
	font-weight: 500;
	font-size: 20px;

	@media only screen and (max-width: 1000px) {
		font-size: 16px;
	}

	@media only screen and (max-width: 816px) {
		font-size: 16px;
		top: 99%;
		left: 76%;
	}
	@media only screen and (max-width: 516px) {
		left: 72%;
	}
	@media only screen and (max-width: 376px) {
		left: 70%;
	}
`

const Styled = {
	Title,
	ImageMapContainer,
	ImageTag1,
	ImageTag2,
	SaleIcon,
	FloorRoom1,
	FloorRoom2,
	FloorMapOne,
	FloorMapSecond,
}

export default Styled
