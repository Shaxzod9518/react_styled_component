import React from 'react'
import PropTypes from 'prop-types'

const Next = ({ fill }) => {
	return (
		<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0.560242 1.9987L20.7401 25.5418L0.541233 50.069L2.85703 51.9761L24.6582 25.5032L2.83801 0.0463257L0.560242 1.9987Z"
				fill={fill}
			/>
			<path
				d="M13.0602 1.9987L33.2401 25.5418L13.0412 50.069L15.357 51.9761L37.1582 25.5032L15.338 0.0463257L13.0602 1.9987Z"
				fill={fill}
			/>
		</svg>
	)
}

Next.propTypes = {
	fill: PropTypes.string,
}

Next.defaultProps = {
	fill: 'white',
}

export default Next
