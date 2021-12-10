import styled from 'styled-components'
import Button from '../Button'

const Map = styled.div`
	max-width: 100%;
	width: 100%;
	height: 500px;
	position: relative;
`
const Card = styled.div`
	position: absolute;
	top: 50%;
	left: 150px;
	transform: translateY(-50%);
	max-width: 400px;
	width: 100%;
	background-color: #fff;
	border: 1px solid #f8eae8;
	padding: 32px 24px;
	@media (max-width: 996px) {
		position: absolute;
		top: 120px;
		left: 80px;
		width: 219px;
		height: 170px;
	}
	@media (max-width: 600px) {
		position: absolute;
		top: 60px;
		left: 40px;
	}
	@media (max-width: 500px) {
		display: none;
	}
`
const CardTitle = styled.h2`
	font-size: 28px;
	line-height: 1.286em;
	font-weight: 700;
	font-family: 'myraidPro-BOLD';
	letter-spacing: 0;
	margin-bottom: 24px;
	@media (max-width: 996px) {
		font-size: 15px;
		margin-bottom: 10px;
	}
`
const CardAddress = styled.h3`
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.1em;
	font-weight: 600;
	margin-bottom: 7px;
	@media (max-width: 996px) {
		font-size: 7px;
	}
`
const CardNumber = styled.div`
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.1em;
	font-weight: 600;
	margin-top: 16px;
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	@media (max-width: 996px) {
		font-size: 6px;
		margin: 8.8px 0 17.6px;
	}
`
const Span = styled.span`
	font-size: 16px;
`
const Link = styled.a`
	font-size: 28px;
	line-height: 1.2em;
	letter-spacing: 0;
	font-family: 'myraidPro';
	color: #103260;
	padding: 0;
	margin-left: 5px;
	@media (max-width: 996px) {
		font-size: 10px;
	}
`
const CardButton = styled(Button)`
	min-width: 100%;
`
const Styled = {
	Map,
	Card,
	CardTitle,
	CardAddress,
	Span,
	Link,
	CardButton,
	CardNumber,
}
export default Styled
