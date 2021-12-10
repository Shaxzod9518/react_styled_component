import React from 'react'
import PropTypes from 'prop-types'

const ModernDesign = ({ fill }) => {
	return (
		<svg
			width="80"
			height="80"
			fill="none"
			viewBox="0 0 48 48"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.5 47C0.9 47 32.3333 47 48 47"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M4 47V29H25V47"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M4 36.5H25"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M10 36.5V46.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M18.5 36.5V47"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M21.5 28.5V1H44.5V46.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M44.5 7.5H31.5V41.5H44.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M31.5 16H44.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M31.5 24.5H44.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M31.5 33H44.5"
				stroke={fill}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

ModernDesign.propTypes = {
	fill: PropTypes.string,
}

ModernDesign.defaultProps = {
	fill: 'black',
}

export default ModernDesign
