import React from 'react'
import PropTypes from 'prop-types'

const Prev = ({ fill }) => {
	return (
		<svg
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
		>
			<path
				d="M37.139 50.0238L16.9592 26.4806L37.158 1.95351L34.8422 0.0463867L13.041 26.5192L34.8612 51.9761L37.139 50.0238Z"
				fill={fill}
			/>
			<path
				d="M24.639 50.0238L4.45917 26.4806L24.658 1.95351L22.3422 0.0463867L0.541016 26.5192L22.3612 51.9761L24.639 50.0238Z"
				fill={fill}
			/>
		</svg>
	)
}

Prev.propTypes = {
	fill: PropTypes.string,
}

Prev.defaultProps = {
	fill: 'white',
}

export default Prev
