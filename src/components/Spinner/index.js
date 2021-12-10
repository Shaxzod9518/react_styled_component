import React from 'react'
import Styled from './styled-components'
import { SwishSpinner } from 'react-spinners-kit'

const Spinner = () => {
	return (
		<Styled.Container>
			<SwishSpinner size={30} color="#103260" loading={true} />
		</Styled.Container>
	)
}

export default Spinner
