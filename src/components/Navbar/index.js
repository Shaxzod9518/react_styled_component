import React, { useState } from 'react'
import Styled from './styled-components'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
	const [inactiveLanguage, setInactiveLanguage] = useState('ru')
	const { t, i18n } = useTranslation()

	const handleLanguageChange = (locale) => {
		i18n.changeLanguage(locale)
		let otherLang = locale === 'ru' ? 'uz' : 'ru'
		setInactiveLanguage(otherLang)
	}

	return (
		<Styled.Nav>
			<Styled.NavContainer>
				<Styled.Brand fill="#103260" />
				<Styled.NavMenu>
					<Styled.NavBox>
						<Styled.NavItem>
							<Styled.NavLinks
								extend
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{t('NavbarHaqimizda')}
							</Styled.NavLinks>
						</Styled.NavItem>
						<Styled.NavItem>
							<Styled.NavLinks
								extend
								to="features"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{t('Xususiyatlar')}
							</Styled.NavLinks>
						</Styled.NavItem>
						<Styled.NavItem>
							<Styled.NavLinks
								to="planning"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{t('NavbarRejalashtirish')}
							</Styled.NavLinks>
						</Styled.NavItem>
						<Styled.NavItem>
							<Styled.NavLinks
								to="amenities"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{t('NavbarJoylar')}
							</Styled.NavLinks>
						</Styled.NavItem>
						<Styled.NavItem>
							<Styled.NavLinks
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{t('NavbarAloqa')}
							</Styled.NavLinks>
						</Styled.NavItem>
					</Styled.NavBox>
					<Styled.NavBoxLeft>
						<Styled.NavItem>
							<Styled.Call
								href="tel:+998998535555"
								className="item"
							>
								(99) 853-55-55
							</Styled.Call>
						</Styled.NavItem>
						<Styled.NavItem>
							<Styled.Button
								onClick={() => {
									handleLanguageChange(inactiveLanguage)
								}}
							>
								{inactiveLanguage}
							</Styled.Button>
						</Styled.NavItem>
					</Styled.NavBoxLeft>
				</Styled.NavMenu>
			</Styled.NavContainer>
		</Styled.Nav>
	)
}
export default Navbar
