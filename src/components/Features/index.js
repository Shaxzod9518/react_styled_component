import React from 'react'
import Styled from './styled-components'
import { Element } from 'react-scroll'
import { data } from './data'
import { useTranslation } from 'react-i18next'

const Features = () => {
	const { t, i18n } = useTranslation()
	const trans = data[i18n.language]
	return (
		<Element name="features">
			<Styled.Features>
				<Styled.Container>
					<Styled.FeaturesTitles>
						<Styled.Title>{t('Xususiyatlari')}</Styled.Title>
					</Styled.FeaturesTitles>
					<Styled.FeaturesImages>
						{trans.map((item, index) => (
							<Styled.FeaturesItem key={index.toString()}>
								<div>
									<Styled.FeaturesImg>
										{item.image}
									</Styled.FeaturesImg>
									<Styled.FeaturesImgTitle>
										{item.title}
									</Styled.FeaturesImgTitle>
								</div>
							</Styled.FeaturesItem>
						))}
					</Styled.FeaturesImages>
				</Styled.Container>
			</Styled.Features>
		</Element>
	)
}

export default Features
