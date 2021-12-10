import { useState, forwardRef, useImperativeHandle } from 'react'
import Styled from './styled-components'
import PropTypes from 'prop-types'

const AmenityModal = (
	{ active, children, classNames, ...props },
	ref
) => {
	const [isOpen, setIsOpen] = useState(false)

	useImperativeHandle(ref, () => ({
		show() {
			setIsOpen(true)
		}, 
	}))

	const handleHideModal = () => {
		setIsOpen(false)
	}

	return (
		<Styled.PopupContainer
			active={isOpen}
			className={classNames}
			{...props}
		>
			<Styled.Wrapper>
				<Styled.PopupClose
					src="/images/amenities/close.svg"
					onClick={() => handleHideModal()}
				/>
				{children}
			</Styled.Wrapper>
		</Styled.PopupContainer>
	)
}

AmenityModal.propTypes = {
	active: PropTypes.bool,
}

AmenityModal.defaultProps = {
	active: true,
}

export default forwardRef(AmenityModal)
