import React, { lazy } from 'react'
import Styled from './styled-components'

const BackTop = ({ children, classNames, ...props }) => {
	const handleClick = () => {
		import('react-scroll').then(({ animateScroll }) => {
			animateScroll.scrollToTop()
		})
	}

	return (
		<Styled.BackTopButton onClick={handleClick} {...props}>
			{children}
		</Styled.BackTopButton>
	)
}

export default BackTop
