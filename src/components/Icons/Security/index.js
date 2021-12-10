import React from 'react'
import PropTypes from 'prop-types'

const Security = ({ fill }) => {
	return (
		<svg
			width="80"
			height="80"
			fill="none"
			viewBox="0 0 31 38"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 20.5V7C9 8.2 13.6667 3.5 15 1C17.8 6.6 25.8333 7.33333 29.5 7V20.5C29.5 30.5 18.8333 36.3333 15 37C7.5 34 1 28 1 20.5Z"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M9.5 19L14 23.5L21 15.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

Security.propTypes = {
	fill: PropTypes.string,
}

Security.defaultProps = {
	fill: 'black',
}

export default Security
