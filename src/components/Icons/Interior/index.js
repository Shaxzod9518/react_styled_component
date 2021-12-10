import React from 'react'
import PropTypes from 'prop-types'

const Interior = ({ fill }) => {
	return (
		<svg
			width="80"
			height="80"
			fill="none"
			viewBox="0 0 50 42"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M32.5 40H16.5V29M16.5 29H1V17H23V29H16.5Z"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M23 29H33V28H26.5V15.5H31.5V14.5H26.5V13.5H31.5V12.5H16.5V1.5H45.5V10.2602"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M32.5 16.5001L38 4.00011C39.3793 0.865425 40.908 2.69399 41.5 4.00011L47.5 16.5001C49.9 20.1001 47.8333 21.3334 46.5 21.5001H34C30.8 21.5001 31.6667 18.1668 32.5 16.5001Z"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M40 21.5V27.5M40 27.5H36V37.5C36.3333 38.5 38.0669 40.5 40.5 40.5C43 40.5 44.5 38 44.5 37.5C44.5 37.1 44.5 30.6667 44.5 27.5H40Z"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

Interior.propTypes = {
	fill: PropTypes.string,
}

Interior.defaultProps = {
	fill: 'black',
}

export default Interior
