import React from 'react'
import Styled from './styled-components'
import PropTypes from 'prop-types'

const Button = ({ primary, children, classNames, ...props }) => {
	return (
		<Styled.Button primary={primary} className={classNames} {...props}>
			{children}
		</Styled.Button>
	)
}

Button.propTypes = {
	primary: PropTypes.bool,
}

Button.defaultProps = {
	primary: false,
}

export default Button
