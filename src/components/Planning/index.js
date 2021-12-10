import React, {
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
	useContext,
} from 'react'
import { Element } from 'react-scroll'
import Styled from './styled-components'
import { homes } from './data'
import Container from '../Container'
import { useTranslation } from 'react-i18next'
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
import { AppContext } from '../../context'

const Planning = ({ ...props }, ref) => {
	const { t, i18n } = useTranslation()
	const transHomes = homes[i18n.language]
	const { modal } = useContext(AppContext)
	const [currentBlock, setCurrentBlock] = useState(transHomes[0])
	const [currentBlockIndex, setCurrentBlockIndex] = useState(0)
	const [currentHome, setCurrentHome] = useState(transHomes[0].homes[0])
	const [currentHomeIndex, setCurrentHomeIndex] = useState(0)
	const [currentType, setCurrentType] = useState(
		transHomes[0].homes[0].types[0]
	)
	const [currentTypeIndex, setCurrentTypeIndex] = useState(0)

	useEffect(() => {
		setCurrentBlock(transHomes[currentBlockIndex])
		setCurrentHome(transHomes[currentBlockIndex].homes[currentHomeIndex])
		setCurrentType(
			transHomes[currentBlockIndex].homes[currentHomeIndex].types[
				currentTypeIndex
			]
		)
	}, [transHomes])

	useImperativeHandle(ref, () => ({
		changeBlock(index) {
			handleBlockChange(index)
		},
	}))

	const handleBlockChange = (event) => {
		const index = event.target ? event.target.value : event
		const block = transHomes[index]
		const home = block.homes[0]

		setCurrentBlock(block)
		setCurrentBlockIndex(index)

		setCurrentHome(home)
		setCurrentHomeIndex(0)

		setCurrentType(home.types[0])
		setCurrentTypeIndex(0)
	}

	const handleHomeChange = (event) => {
		const index = event.target.value
		const home = currentBlock.homes[index]

		setCurrentHome(home)
		setCurrentHomeIndex(index)

		setCurrentType(home.types[0])
		setCurrentTypeIndex(0)
	}

	const handleTypeChange = (index) => {
		if (index >= 0 && index < currentHome.types.length) {
			setCurrentType(currentHome.types[index])
			setCurrentTypeIndex(index)
		}
	}

	return (
		<Element name="planning">
			<Container {...props}>
				<Styled.Container>
					<Styled.Content>
						<Styled.About>
							<Styled.Filter>
								<Styled.SelectBox
									value={currentBlockIndex}
									onChange={handleBlockChange}
								>
									{transHomes &&
										transHomes.map((block, index) => (
											<Styled.SelectOption
												value={index}
												key={index.toString()}
											>
												{block.name}
											</Styled.SelectOption>
										))}
								</Styled.SelectBox>
								<Styled.SelectBox
									value={currentHomeIndex}
									onChange={handleHomeChange}
								>
									{currentBlock.homes &&
										currentBlock.homes.map(
											(home, index) => (
												<Styled.SelectOption
													value={index}
													key={index.toString()}
												>
													{home.name}
												</Styled.SelectOption>
											)
										)}
								</Styled.SelectBox>
							</Styled.Filter>
							<Styled.Detail>
								<Styled.DetailHeader>
									<Styled.DetailCost>
										<Styled.DetailHeading>
											{t('Narx')}
										</Styled.DetailHeading>
										<p>
											<Styled.DetailHeading>
												{t('dan')}
											</Styled.DetailHeading>
											<Styled.Strong>
												{currentType.price}
											</Styled.Strong>
											<Styled.DetailHeading>
												{t('sum')}
											</Styled.DetailHeading>
										</p>
									</Styled.DetailCost>
									<Styled.DetailSpace>
										<Styled.DetailHeading>
											{t('Maydon')}
										</Styled.DetailHeading>
										<p>
											<Styled.DetailHeading>
												{t('dan')}
											</Styled.DetailHeading>
											<Styled.Strong>
												{currentType.square}
											</Styled.Strong>
											<Styled.DetailHeading>
												{t('sum')}
											</Styled.DetailHeading>
										</p>
									</Styled.DetailSpace>
								</Styled.DetailHeader>
								<Styled.DetailBody>
									{currentType.features &&
										currentType.features.map(
											(feature, index) => (
												<Styled.DetailItem
													key={index.toString()}
												>
													<Styled.DetailHeading>
														{feature.name}
													</Styled.DetailHeading>
													<Styled.DetailItemData>
														{feature.value}
													</Styled.DetailItemData>
												</Styled.DetailItem>
											)
										)}
								</Styled.DetailBody>
								<Styled.CallToAction
									primary
									onClick={() => modal.current.show()}
								>
									{t('Hozir bron qiling')}
								</Styled.CallToAction>
							</Styled.Detail>
						</Styled.About>

						<Styled.Illustration>
							<Styled.Figure>
								<Styled.Image src={currentType.illustration} />
							</Styled.Figure>
							{currentHome.types.length > 1 ? (
								<Styled.SliderNavigation>
									<Styled.PreviousContainer
										onClick={() =>
											handleTypeChange(
												currentTypeIndex - 1
											)
										}
									>
										<ArrowLeft />
									</Styled.PreviousContainer>
									{currentHome.types.map((type, index) => (
										<Styled.SlideDot
											onClick={() =>
												handleTypeChange(index)
											}
											active={index === currentTypeIndex}
											key={index.toString()}
										>
											{index + 1}{t('v')}
										</Styled.SlideDot>
									))}
									<Styled.NextContainer
										onClick={() =>
											handleTypeChange(
												currentTypeIndex + 1
											)
										}
									>
										<ArrowRight />
									</Styled.NextContainer>
								</Styled.SliderNavigation>
							) : null}
						</Styled.Illustration>
					</Styled.Content>
				</Styled.Container>
			</Container>
		</Element>
	)
}

export default forwardRef(Planning)
