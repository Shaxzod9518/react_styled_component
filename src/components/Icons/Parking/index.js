import React from 'react'
import PropTypes from 'prop-types'

const Parking = ({ fill }) => {
	return (
		<svg
			width="80"
			height="80"
			fill="none"
			viewBox="0 0 50 48"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M39.75 18H31V1H48.5V18H39.75ZM39.75 18V46.5M38 11.5H40C41 11.5 42 11 42 9.5C42 8 41.5 7 40 7H38"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M49 46.5H1"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M1 40.5H13"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M38 6.5V15.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<circle cx="19" cy="40.5" r="5" stroke={fill} strokeWidth="2" />
			<path
				d="M24.5 40.4999H33.5V32.4999C33.5 30.8332 32.5 27.3999 28.5 26.9999C24.5 26.5999 8.5 26.8332 1 26.9999"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M1 18H16.5L22 26.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M29 34.5H33"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

Parking.propTypes = {
	fill: PropTypes.string,
}

Parking.defaultProps = {
	fill: 'black',
}

export default Parking
