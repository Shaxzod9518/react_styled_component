import styled from 'styled-components'
import Button from '../Button'

const Container = styled.div`
	box-sizing: border-box;
	padding: 120px 0;

	@media only screen and (max-width: 768px) {
		padding: 120px 0;
	}
`

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
	}

	svg {
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 28px;
	}
`

const HighlightedText = styled.span`
	color: #103260;
`

const Content = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 24px;

	@media (max-width: 786px) {
		display: block;
		margin: 0 auto;
	}
`

const About = styled.div`
	width: 50%;
	max-width: 400px;

	@media only screen and (max-width: 786px) {
		width: 100%;
	}
`
const Filter = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 7px;
`

const SelectBox = styled.select`
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.09);
	padding: 9px 11px;
	color: #777;
	font-weight: 400;
	font-size: 14px;
	cursor: pointer;
`

const SelectOption = styled.option`
	color: #777;
`

const Detail = styled.div`
	margin-top: 24px;
`

const DetailTitle = styled.h3`
	font-family: 'myraidPro-BOLD';
	font-size: 24px;
	font-weight: 700;
	color: #2d2e32;
	padding: 14px 0px;
	border-bottom: 1px dashed rgba(0, 0, 0, 0.09);
`

const DetailHeader = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px dashed rgba(0, 0, 0, 0.09);
	padding: 40px 15px;
`
const DetailCost = styled.div`
	font-size: 8px;
`
const DetailSpace = styled.div`
	font-size: 8px;
`

const Strong = styled.strong`
	font-size: 20px;
	font-weight: 700;
	margin: 5px;
	@media (max-width: 786px) {
		font-size: 16px;
	}
`
const DetailHeading = styled.span`
	font-weight: 400;
	color: #8f8f8f;
	text-shadow: 0px 0px 14px #ffffff;
	font-size: 14px;
	line-height: 20px;
`
const DetailBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 44px 0;

	@media (max-width: 768px) {
		padding: 44px 0;
		margin-right: 0;
		margin-left: 0;
	}
`

const CallToAction = styled(Button)`
	display: block;
	min-width: 100%;
	margin: 0;
	margin-bottom: 24px;
`

const DetailItem = styled.div`
	margin: 0 0 17px;
	padding: 0 16px;
	color: red;

	&:nth-child(2),
	&:nth-child(5),
	&:nth-child(8) {
		border-left: 0.5px dashed #d9d9d9;
		border-right: 0.5px dashed #d9d9d9;
	}
	@media (max-width: 400px) {
		padding: 0 15px;
	}
`
const DetailItemData = styled.p`
	font-size: 20px;
	color: #303030;
	letter-spacing: 0.5px;
	font-weight: 700;
`

const Illustration = styled.div`
	width: 50%;
	max-width: 600px;
	margin-left: 48px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (max-width: 786px) {
		width: 100%;
		margin: 16px 0 80px;
	}
`

const Figure = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 24px;
	border: 2px solid #f6f6f6;
`

const Image = styled.img`
	display: block;
	width: 100%;
	max-width: 643px;
	object-fit: contain;
	object-position: center;
`

const SliderNavigation = styled.ul`
	margin-top: 24px;
	display: flex;
	align-items: center;
	list-style-type: none;
`
const PreviousContainer = styled.li`
	margin-right: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
`

const NextContainer = styled.li`
	margin-left: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
`

const SlideDot = styled.li`
	margin: 0 8px;
	transition: 0.4s;
	cursor: pointer;
	color: ${(props) => (props.active ? '#103260' : 'black')};
`

const Styled = {
	Container,
	Title,
	HighlightedText,
	Content,
	About,
	Filter,
	SelectBox,
	SelectOption,
	Detail,
	DetailTitle,
	DetailHeader,
	DetailCost,
	DetailHeading,
	Strong,
	DetailSpace,
	DetailBody,
	CallToAction,
	DetailItem,
	DetailItemData,
	Illustration,
	Figure,
	Image,
	SliderNavigation,
	PreviousContainer,
	NextContainer,
	SlideDot,
}

export default Styled
