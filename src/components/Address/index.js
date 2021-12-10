import React, { useContext } from 'react'
import { AppContext } from '../../context'
import Styled from './styled-components'
import { useTranslation } from 'react-i18next'
// import { YMaps, Map } from 'react-yandex-maps'

const Address = () => {
	const { modal } = useContext(AppContext)
	const { t } = useTranslation()

	return (
		<Styled.Map>
			<iframe
				src="https://yandex.com/map-widget/v1/?um=constructor%3Aec8ae3dec7ae8b43d2f9c710688920b81a6c06ec0dff5db668231f450faa723c&amp&scroll=false"
				width="100%"
				height="100%"
				frameBorder="0"
				title="Shinam manzili"
			></iframe>
			<Styled.Card>
				<Styled.CardTitle>{t('Локация')}</Styled.CardTitle>
				<Styled.CardAddress>
					{t('Manzil')}:{' '}
					<Styled.Span>
						{t('Yunusobod tumani, Firdavsiy ko’chasi …. uy')}
					</Styled.Span>
				</Styled.CardAddress>
				<Styled.CardNumber>
					{t("Qo'ng'iroqlar markazi")}:{' '}
					<Styled.Link href="tel:+998998535555">
						99 853-55-55
					</Styled.Link>
				</Styled.CardNumber>
				<Styled.CardButton primary onClick={() => modal.current.show()}>
					{t('Uchrashuvni belgilang')}
				</Styled.CardButton>
			</Styled.Card>
		</Styled.Map>
	)
}

export default Address
