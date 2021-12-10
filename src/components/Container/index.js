import React from 'react'
import Styled from './styled-components'

const Container = ({ children, classNames, ...props }) => (
	<Styled.Container className={classNames} {...props}>
		{children}
	</Styled.Container>
)

export default Container
