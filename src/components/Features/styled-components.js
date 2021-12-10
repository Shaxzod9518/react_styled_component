import styled from 'styled-components'

const Features = styled.div`
	background-color: #f8f9fb;
	padding: 120px 0;
`

const Container = styled.div`
	max-width: 80%;
	width: 100%;
	margin: 0 auto;
`

const FeaturesTitles = styled.div`
	text-align: center;
`

const Title = styled.h2`
	font-size: 60px;
	line-height: 1.067em;
	font-family: 'myraidPro';
	font-weight: 400;
	color: #303030;
	text-align: center;
	margin-bottom: 90px;

	@media only screen and (max-width: 786px) {
		font-size: 50px;
	}

	svg {
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 28px;
	}
`

const FeaturesImages = styled.div`
	margin-top: 90px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 40px;

	@media (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

const FeaturesItem = styled.div`
	text-align: center;
	padding: 45px 30px 34px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: translateY(-8px);
		background-color: #fff;
		transition: all 0.2s ease-in-out;
		box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
	}

	&:hover img {
		transition: all 0.2s ease-in-out;
		transform: translateY(-8px);
		transform: scale(1.1);
	}
`
const FeaturesImg = styled.span`
	max-width: 100%;
	height: auto;
	transition: all 0.2s ease-in-out;
`

const FeaturesImgTitle = styled.h3`
	font-family: 'myraidPro-SEMIBOLD';
	font-size: 24px;
	font-weight: 700;
	color: #2d2e32;
	margin-top: 48px;
	margin-bottom: 12px;
`

const FeaturesImgDesc = styled.p`
	font-family: 'Open sans', sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 30px;
	color: #7b7b7b;
	margin-bottom: 20px;
`
const Styled = {
	Features,
	Container,
	FeaturesTitles,
	Title,
	FeaturesImages,
	FeaturesItem,
	FeaturesImg,
	FeaturesImgTitle,
    FeaturesImgDesc
}

export default Styled
