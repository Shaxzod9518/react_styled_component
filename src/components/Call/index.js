import React, { useContext } from 'react'
import { AppContext } from '../../context'
import Styled from './styled-componentes'
import Phone from '../Icons/Phone'

const Call = () => {
	const { modal } = useContext(AppContext)
	
	return (
		<Styled.Container>
			<Styled.Icon onClick={() => modal.current.show()}>
				<Phone fill="white" />
			</Styled.Icon>
		</Styled.Container>
	)
}

export default Call
 