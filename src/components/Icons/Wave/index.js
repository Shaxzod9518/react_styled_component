import React from 'react'
import PropTypes from 'prop-types'

const Wave = ({ fill }) => {
	return (
		<svg
			width="65.167px"
			height="11.917px"
			viewBox="0 0 65.167 11.917"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={fill}
				stroke="#ffffff"
				strokeWidth="2"
				strokeMiterlimit="3"
				d="M1.045,9.833 9.295,2.083 17.295,9.833
            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "
			/>
		</svg>
	)
}

Wave.propTypes = {
	fill: PropTypes.string,
}

Wave.defaultProps = {
	fill: 'black',
}

export default Wave
