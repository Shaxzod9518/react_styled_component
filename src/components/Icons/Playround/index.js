import React from 'react'
import PropTypes from 'prop-types'

const Playround = ({ fill }) => {
	return (
		<svg
			width="80"
			height="80"
			fill="none"
			viewBox="0 0 41 39"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M1 38.5V9L9 2L17 9V39" stroke={fill} strokeWidth="2" />
			<path d="M1 9H17" stroke={fill} strokeWidth="2" />
			<path
				d="M1 20H21L34.5 38H40V32.5H36.5L23.5 15H17"
				stroke={fill}
				strokeWidth="2"
			/>
			<path d="M6.5 25H11.5" stroke={fill} strokeWidth="2" />
			<path d="M6.5 30H11.5" stroke={fill} strokeWidth="2" />
			<path d="M6.5 35H11.5" stroke={fill} strokeWidth="2" />
			<path d="M6.5 39V13.5H11.5V39" stroke={fill} strokeWidth="2" />
		</svg>
	)
}

Playround.propTypes = {
	fill: PropTypes.string,
}

Playround.defaultProps = {
	fill: 'black',
}

export default Playround
