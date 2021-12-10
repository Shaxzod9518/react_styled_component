import React from 'react'
import PropTypes from 'prop-types'

const Instagram = ({ fill }) => {
	return (
		<svg
			width="32"
			height="32"
			fill="none"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23.3378 0H8.66209C3.88573 0 0 3.88573 0 8.66209V23.3381C0 28.1142 3.88573 31.9999 8.66209 31.9999H23.3381C28.1142 31.9999 31.9999 28.1142 31.9999 23.3381V8.66209C31.9999 3.88573 28.1142 0 23.3378 0V0ZM16 24.7497C11.1753 24.7497 7.25023 20.8247 7.25023 16C7.25023 11.1753 11.1753 7.25023 16 7.25023C20.8247 7.25023 24.7497 11.1753 24.7497 16C24.7497 20.8247 20.8247 24.7497 16 24.7497ZM24.9589 9.3137C23.5332 9.3137 22.3735 8.15404 22.3735 6.72826C22.3735 5.30248 23.5332 4.14257 24.9589 4.14257C26.3847 4.14257 27.5446 5.30248 27.5446 6.72826C27.5446 8.15404 26.3847 9.3137 24.9589 9.3137Z"
				fill={fill}
			/>
			<path
				d="M16 9.12622C12.21 9.12622 9.12622 12.2097 9.12622 16C9.12622 19.79 12.21 22.8738 16 22.8738C19.7903 22.8738 22.8738 19.79 22.8738 16C22.8738 12.2097 19.7903 9.12622 16 9.12622Z"
				fill={fill}
			/>
			<path
				d="M24.959 6.0188C24.5679 6.0188 24.2495 6.33716 24.2495 6.72827C24.2495 7.11938 24.5679 7.43774 24.959 7.43774C25.3503 7.43774 25.6687 7.11963 25.6687 6.72827C25.6687 6.33691 25.3503 6.0188 24.959 6.0188Z"
				fill={fill}
			/>
		</svg>
	)
}

Instagram.propTypes = {
	fill: PropTypes.string,
}

Instagram.defaultProps = {
	fill: 'black',
}

export default Instagram