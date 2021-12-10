import styled from 'styled-components'

const Container = styled.div`
	width: 1256px;
	margin: 0 auto;

	@media only screen and (max-width: 1302px) {
		width: 768px;
	}

	@media only screen and (max-width: 786px) {
		width: calc(100% - 32px);
	}
`
const Styled = {
    Container
}

export default Styled;