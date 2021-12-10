import React from 'react'
import { Element } from 'react-scroll'
import Styled from './styled-components'
import AmenitiesCarousel from '../AmenitiesCarousel'
import { useTranslation } from 'react-i18next'
import { amenities } from './data'

const Amenities = () => {
	const { t, i18n } = useTranslation()
	const trans = amenities[i18n.language]

	return (
		<Element name="amenities">
			<Styled.AmenityBg>
				<Styled.AmenityTitle>{t('Yaqin atrof')}</Styled.AmenityTitle>
				<Styled.AmenityIcon></Styled.AmenityIcon>
				<AmenitiesCarousel>
					{trans.map((amenity, index) => (
						<Styled.CarouselItem
							title={amenity.title}
							desc={amenity.desc}
							image={amenity.image}
							key={index.toString()}
						/>
					))}
				</AmenitiesCarousel>
			</Styled.AmenityBg>
		</Element>
	)
}

export default Amenities
