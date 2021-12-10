import React from 'react'
import { Element } from 'react-scroll'
import Styled from './styled-components'
import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Telegram from '../Icons/Telegram'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()
	return (
		<Element name="contact">
			<Styled.Container>
				<Styled.Wrapper>
					<Styled.Card>
						<Styled.Title>{t('Bizning manzil')}:</Styled.Title>

						<Styled.Subtitle>
							{t('Yunusobod tumani, Firdavsiy ko’chasi …. uy')}
						</Styled.Subtitle>
					</Styled.Card>
					<Styled.Card>
						<Styled.Title>{t('Mo’ljal')}:</Styled.Title>
						<Styled.Subtitle>
							{t(
								'Qazichilar mahallasi, 5 shahar stomatologiya poliklinikasi'
							)}
						</Styled.Subtitle>
					</Styled.Card>
					<Styled.Card>
						<Styled.Title>
							{t("Ish vaqti Savdo bo'limi")}:
						</Styled.Title>
						<Styled.Subtitle>
							{t(
								'Du-Ju: 9:00 dan 19:00 gacha, shanba: 10:00 dan 18:00 gacha'
							)}
						</Styled.Subtitle>
					</Styled.Card>
					<Styled.Card>
						<Styled.Title>{t('Tel')}:</Styled.Title>
						<Styled.Subtitle>
							+998 99 853-55-55 <br />
							+998 99 854 11 01
						</Styled.Subtitle>
					</Styled.Card>
				</Styled.Wrapper>

				<Styled.Line></Styled.Line>

				<Styled.FooterBottom>
					<Styled.Copyright>
						{t(
							'"Future House 2021" MChJ kompaniyalari guruhi "FUTURE HOUSE CONSTRUCTIONS" Saytdagi ma\'lumotlar\naxborot maqsadida. Aniqroq ma\'lumot olish uchun kompaniya menejerlariga murojaat qiling'
						)}
					</Styled.Copyright>
					<Styled.Box>
						{/*<Styled.Icon target="_blank" href="">*/}
						{/*	<Facebook />*/}
						{/*</Styled.Icon>*/}

						<Styled.Icon
							target="_blank"
							href="https://www.instagram.com/shinamhome.uz/"
						>
							<Instagram />
						</Styled.Icon>

						<Styled.Icon
							target="_blank"
							href="https://t.me/Shinamhome_uz"
						>
							<Telegram />
						</Styled.Icon>
					</Styled.Box>
				</Styled.FooterBottom>
			</Styled.Container>
		</Element>
	)
}
export default Footer
