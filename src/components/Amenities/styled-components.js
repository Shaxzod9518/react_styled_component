import styled from 'styled-components'
import AmenityCard from '../AmenityCard'

const PopupTitle = styled.h1`
	font-family: 'myraidPro-BOLD';
	font-size: 41px;
	font-weight: 700;
	color: #303030;
	margin-bottom: 45px;
`

const ContentTitle = styled.h3`
	font-family: 'Open sans', sans-serif;
	font-size: 19px;
	font-weight: 700;
	text-align: center;
	color: #383838;
`
const ContentSpan = styled.span`
	font-family: 'Open sans', sans-serif;
	font-size: 19px;
	font-weight: 700;
	color: #383838;
`

const PopupAbout = styled.p`
	font-family: 'Open sans', sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 33px;
	color: #383838;
	margin-bottom: 45px;
`

const PopupImage = styled.img`
	width: 100%;
	margin: 12px 0;
`
const List = styled.ul`
	margin: 22px 0;
	padding-left: 20px;

	@media only screen and (max-width: 786px) {
		padding-left: 16px;
	}
`
const ListItem = styled.li`
	font-size: 19px;
	font-weight: 400;
	color: #383838;
	list-style-type: square;
	line-height: 36px;
	padding-left: 12px;
`
const AmenityBg = styled.div`
	background-color: rgb(34, 34, 34);
	padding: 136px 0 140px;
`

const AmenityIcon = styled.svg`
  display: block;
  margin: 28px auto 90px auto;
  width: 65px;
  height: 11px;
`

const CarouselItem = styled(AmenityCard)`
	margin-left: 12px;
	margin-right: 12px;

	svg {
		display: block;
	}
	h3 {
		text-align: center;
	}
`

const AmenityTitle = styled.h2`
	font-family: 'myraidPro';
	font-size: 60px;
	font-weight: 400;
	color: #fff;
	text-align: center;
	margin-bottom: 40px;
`

const SliderSwaps = styled.div`
	width: 120px;
	display: flex;
	justify-content: space-around;
	margin: 60px auto 0;
`

const SwapsItem = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
`

const Styled = {
	List,
	ListItem,
	PopupImage,
	PopupAbout,
	ContentTitle,
	PopupTitle,
	ContentSpan,
	AmenityBg,
	AmenityIcon,
	CarouselItem,
	AmenityTitle,
	SliderSwaps,
	SwapsItem,
}

export default Styled
