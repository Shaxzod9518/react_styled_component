import React from 'react'
import Styled from './styled-components'

const AmenityCard = ({ title, desc, image, classNames, ...props }) => {
	return (
		<Styled.CardWrapper className={classNames} {...props}>
			<Styled.Ratio>
				<Styled.CardImage>{image}</Styled.CardImage>
			</Styled.Ratio>
			<Styled.CardContent>
				<Styled.CardTitle>{title}</Styled.CardTitle>
				<Styled.CardAbout dangerouslySetInnerHTML={{ __html: desc }} />
			</Styled.CardContent>
		</Styled.CardWrapper>
	)
}

export default AmenityCard
