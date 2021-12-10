import React from 'react'
import PropTypes from 'prop-types'

const Window = ({ fill }) => {
	return (
		<svg
			width="80"
			height="80"
			fill="none"
			viewBox="0 0 41 41"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M30.5 29.9999C28.9 29.1999 27.8333 25.9999 27.5 24.4999C28.7 23.2999 31.6667 27.6666 33 29.9999C32.8333 30.3333 32.1 30.7999 30.5 29.9999Z"
				stroke={fill}
				strokeWidth="1.5"
			/>
			<path
				d="M36.0005 21.5C36.5005 20.8333 37.9005 19.6 39.5005 20C38 25 38 28 36 30.5"
				stroke={fill}
				strokeWidth="1.5"
			/>
			<path d="M21 2V0" stroke={fill} strokeWidth="2" />
			<path
				d="M24.5 1H41V37.5H37.5V30.5H29V37.5H1V1H17"
				stroke={fill}
				strokeWidth="2"
			/>
			<path d="M7.5 40.5H9" stroke={fill} strokeWidth="2" />
			<path d="M11.5 40.5H41" stroke={fill} strokeWidth="2" />
			<path d="M29 38V40" stroke={fill} strokeWidth="2" />
			<path d="M37.5 38V40" stroke={fill} strokeWidth="2" />
			<path d="M1.5 5.5H40.5" stroke={fill} strokeWidth="2" />
			<path d="M21 6V37" stroke={fill} strokeWidth="2" />
			<path
				d="M33.5 30C32.3 30.4 30 23.5 29 20C30.3199 20.3771 31.4976 21.8209 32.3722 23.5M33.5 30C34.4343 29.6886 33.8167 26.2733 32.3722 23.5M33.5 30C34.3333 28.8333 36.1 24.9 36.5 18.5C35.2481 19.1667 32.67 21.1 32.3722 23.5"
				stroke={fill}
				strokeWidth="1.5"
			/>
			<rect x="5.5" y="21" width="2" height="2" fill={fill} />
			<rect x="1.5" y="33" width="2" height="2" fill={fill} />
			<rect x="9.5" y="25" width="2" height="2" fill={fill} />
			<rect x="6.5" y="20" width="2" height="2" fill={fill} />
			<rect x="2.5" y="32" width="2" height="2" fill={fill} />
			<rect x="10.5" y="24" width="2" height="2" fill={fill} />
			<rect x="7.5" y="19" width="2" height="2" fill={fill} />
			<rect x="3.5" y="31" width="2" height="2" fill={fill} />
			<rect x="11.5" y="23" width="2" height="2" fill={fill} />
			<rect x="8.5" y="18" width="2" height="2" fill={fill} />
			<rect x="4.5" y="30" width="2" height="2" fill={fill} />
			<rect x="12.5" y="22" width="2" height="2" fill={fill} />
			<rect x="9.5" y="17" width="2" height="2" fill={fill} />
			<rect x="5.5" y="29" width="2" height="2" fill={fill} />
			<rect x="13.5" y="21" width="2" height="2" fill={fill} />
			<rect x="12.5" y="14" width="2" height="2" fill={fill} />
			<rect x="8.5" y="26" width="2" height="2" fill={fill} />
			<rect x="16.5" y="18" width="2" height="2" fill={fill} />
			<rect x="14.5" y="12" width="2" height="2" fill={fill} />
			<rect x="10.5" y="16" width="2" height="2" fill={fill} />
			<rect x="6.5" y="28" width="2" height="2" fill={fill} />
			<rect x="14.5" y="20" width="2" height="2" fill={fill} />
			<rect x="11.5" y="15" width="2" height="2" fill={fill} />
			<rect x="7.5" y="27" width="2" height="2" fill={fill} />
			<rect x="15.5" y="19" width="2" height="2" fill={fill} />
		</svg>
	)
}

Window.propTypes = {
	fill: PropTypes.string,
}

Window.defaultProps = {
	fill: 'black',
}

export default Window
