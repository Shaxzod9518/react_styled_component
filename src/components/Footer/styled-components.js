import styled from 'styled-components'

const Container = styled.div`
	max-width: 1236px;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-top: 24px;
	padding-bottom: 24px;

	@media (max-width: 1200px) {
		padding: 24px 16px;
	}
`
const Wrapper = styled.div`
	display: flex;
	margin: 80px auto 0 auto;
	@media (max-width: 786px) {
		display: block;
		margin: 80px auto 0 auto;
	}
`
const Title = styled.h1`
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	line-height: 24px;
	margin-bottom: 12px;
	color: #000000;
`
const Subtitle = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 24px;
	color: #8c8b8b;
`
const Card = styled.div`
	max-width: 291px;
	width: 100%;
	margin-left: 24px;
	&:first-child {
		margin-left: 0;
	}
	@media (max-width: 786px) {
		margin-top: 32px;
		margin-left: 0;
	}
`

const FooterBottom = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 786px) {
		display: block;
	}
`
const Copyright = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	max-width: 606px;
	color: #8c8b8b;
`
const Box = styled.div`
	display: flex;
	column-gap: 32px;
	@media (max-width: 786px) {
		margin-top: 32px;
	}
`
const Icon = styled.a`
	text-decoration: none;
	color: black;
`
const Line = styled.div`
	width: 100%;
	max-width: 100%;
	border: 1px solid #dfdfdf;
	margin: 48px 0 24px 0;
`

const Styled = {
	Container,
	Subtitle,
	Card,
	Title,
	FooterBottom,
	Copyright,
	Wrapper,
	Box,
	Icon,
	Line,
}
export default Styled
