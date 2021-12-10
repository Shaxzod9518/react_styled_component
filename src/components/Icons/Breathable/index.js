import React from 'react'
import PropTypes from 'prop-types'

const Breathable = ({ fill }) => {
	return (
		<svg
			width="80"
			height="80"
			fill="none"
			viewBox="0 0 48 47"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 21.5L24 1L46.5 21.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M7 16V30.5M18 30.5V26.5H30V30M41 30.5V16.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M3 39.5L8.5 34.5L13 39.5L18 34.5L23.5 40L28 34.5L33.5 40L38.5 34.5L44 40"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M3 45L8.5 40L13 45L18 40L23.5 45.5L28 40L33.5 45.5L38.5 40L44 45.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

Breathable.propTypes = {
	fill: PropTypes.string,
}

Breathable.defaultProps = {
	fill: 'black',
}

export default Breathable
