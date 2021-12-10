import styled from 'styled-components'
import { Link } from 'react-scroll'
import Logo from '../Icons/Logo'

const Nav = styled.nav`
	background: #ffffff;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1em;
	top: 0;
	z-index: 10;

	@media (max-width: 960px) {
		transition: 0.8s all ease;
	}
`

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	height: auto;
	z-index: 1;
	width: 100%;
	padding: 0 40px;
	max-width: 100%;
	position: relative;

	@media (max-width: 786px) {
		display: flex;
		align-items: center;
		height: auto;
		z-index: 1;
		width: 100%;
		padding: 0 20px;
		max-width: 100%;
		position: relative;
	}

	@media (max-width: 696px) {
		padding: 0 20px;
	}
`

const NavLogo = styled.div`
	color: #ffffff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5em;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none;
`
const Brand = styled(Logo)`
	width: 150px;
	margin-right: 7px;
	margin-top: -5px;

	@media (max-width: 400px) {
		width: 100px;
		margin-right: 5px;
	}
`
const NavMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style-type: none;
	text-align: center;
	margin-left: 32px;
`
const NavItem = styled.li`
	height: auto;
`
const NavLinks = styled(Link)`
	color: #000000;
	text-align: center;
	text-decoration: none;
	padding: 2px 1rem;
	height: 100%;
	cursor: pointer;
	font-size: 18px;
	transition: 0.4s;

	&:hover {
		background: #103260;
		color: white;
		transition: 0.4s;
	}

	@media (max-width: 1200px) {
		padding: 2px 0.5rem;
	}
	@media (max-width: 600px) {
		font-size: 16px;
	}
`

const NavBox = styled.ul`
	display: flex;

	@media (max-width: 998px) {
		display: none;
	}
`

const NavBoxLeft = styled.ul`
	display: flex;
	align-items: center;

	@media (max-width: 700px) {
		right: 22px;
		margin-left: auto;
	}
`

const Button = styled.button`
	width: 50px;
	font-size: 14px;
	font-weight: 600;
	padding: 5px 12px;
	cursor: pointer;
	background-color: transparent;
	border: 1.5px solid black;
	color: black;
	text-align: center;
	text-transform: uppercase;

	@media (max-width: 400px) {
		width: 40px;
		font-size: 13px;
		padding: 4px 8px;
	}
`
const Call = styled.a`
	text-decoration: none;
	color: black;
	font-size: 18px;
	display: flex;
	align-items: center;
	margin-right: 32px;

	@media (max-width: 600px) {
		font-size: 16px;
	}

	@media (max-width: 400px) {
		font-size: 14px;
		margin-right: 10px;
	}
`
const Styled = {
	Call,
	Button,
	NavBoxLeft,
	Nav,
	NavContainer,
	NavLogo,
	Brand,
	NavMenu,
	NavItem,
	NavBox,
	NavLinks,
}

export default Styled
