import React, { useState, useContext } from 'react'
import { AppContext } from '../../context'
import Styled from './styled-components.js'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const opacity = {
	Active: {
		opacity: '1',
	},
	Inactive: {
		opacity: '0',
	},
}

const ImageMap = () => {
	const { t, i18n } = useTranslation()
	const [isShown, setIsShown] = useState(false)
	const [isShown2, setIsShown2] = useState(false)

	const { plan } = useContext(AppContext)

	return (
		<>
			<Styled.Title>{t('Xonadon va narhlar')}</Styled.Title>
			<Styled.ImageMapContainer>
				<svg
					viewBox="0 0 2560 1680"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<foreignObject x="0" y="0" width="100%" height="100%">
						<picture style={{ display: 'block' }}>
							<source
								srcSet="/images/image-map/home.webp"
								media="(min-width: 768px)"
							/>
							<source
								srcSet="/images/image-map/home.jpg"
								media="(min-width: 768px)"
							/>
							<source
								srcSet="/images/image-map/home-576.webp"
								media="(max-width: 576px)"
							/>
							<source
								srcSet="/images/image-map/home-576.jpg"
								media="(max-width: 576px)"
							/>
							<img
								src="/images/image-map/home.jpg"
								style={{ minWidth: '100%' }}
							/>
						</picture>
					</foreignObject>
					<Link
						extend
						to="planning"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<g
							cursor="pointer"
							pointer-events="all"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
							onClick={() => plan.current.changeBlock(0)}
						>
							<path
								style={
									isShown ? opacity.Active : opacity.Inactive
								}
								transform="translate(458, 0)"
								d="M134.5 2.5L135 0.5H153L149.5 5V7.5L153 10.5L159 17.5L188 0L252 1L243 23.5H235C237.4 35.5 247.333 38.1667 252 38L253.5 35L261.5 31H265.5L268 26.5L263 27L260 20.5L265.5 10.5L267 1L283.5 0L284.5 13.5L288.5 17.5H293L301 1C301.667 0.833333 303.2 0.6 304 1C337.2 9 374.5 43 389 59L390.5 54.5L388 51.5L389 47.5C378.5 30 397 27 397.5 27C412.3 33.8 407.667 45.1667 403.5 50L401.5 54.5L411.5 65L437.5 70V71.5L426.5 88.5L417 98.5L411.5 97V106.5L457.5 116V113L455.5 109.5L454 106.5H452.5V104H446V100.5L444 95L441 88.5L454 73.5H461.5L464 70L461.5 65C462.195 64.027 463.47 62.3818 463.874 62.3263C453.139 47.4498 470.998 41 470.5 41C479.7 42.6 479 53.6667 477.5 59L475 65V70L480.5 79.5H485C509.4 52.7 537.5 48.6667 548.5 50H552L555.5 35.5L562 37L566 70H568C571.833 65.6667 579.5 56.9 579.5 56.5C600.7 60.9 624 87.6667 633 100.5C633.167 98.6667 633.4 95 633 95C625 75.5 638.5 75.5 638 76C646.8 75.6 646 88.5 644.5 95L642.5 102L648.5 109.5L670 113L721 65L754 37L834.5 55L949.5 111L951 112.5L950 116.5L946.5 119L941 122.5L936 126L936.5 138.5L942 140V141.5L938 143V147H936.5L935.5 150L925 157V181.5L942 169H948.5V165.5L946.5 163C947.038 161.789 948.011 159.797 948.366 159.704C940.187 141.511 957.505 142.503 958.5 143C964.1 145.4 963.5 154.333 962.5 158.5V163H960V167L964 169L967 174C969.667 175 975.1 177 975.5 177C990.3 158.2 1023.67 152.167 1038.5 151.5L1041 140H1049.5C1051.9 140 1053.83 158 1054.5 167C1059.17 164 1068.6 158.1 1069 158.5C1095.5 165.5 1115 189.5 1115 188.5C1115 187.5 1116.5 179 1119 177C1121.5 177 1126 176.5 1126.5 177C1132.5 177 1132 187.333 1131 192.5V194.5L1129 196V200.5L1135 206L1160 211.5L1151.5 221L1150 226L1138 229C1137.83 230.167 1137.6 232.5 1138 232.5C1164.4 225.3 1182.67 245.167 1188.5 256L1183 261.5V301.5L1190 330.5L1210.5 335.5L1198 343.5V351.5H1193.5L1190 359.5V1089.5L1193.5 1154.5L1192 1452L1142.5 1459.5V1466L1138 1472L161 1642L117 1648.5L61.5 1442.5V1402V1308.5C61.9 1295.7 59.6667 1290.83 58.5 1290L58 1186L30.5 1187L21 1162.5L19.5 453.5H14V442H9.5V436.5H0.5L0 425L10 385.5H12V377.5C5.6 369.9 19.6667 367 27.5 366.5L28 361.5L34.5 336L35 332.5L32 323.5L33.5 317L32 314.5L29 310.5L26 309.5L25 303H21.5L19 300.5V294C17.1667 293.5 13.5 292.4 13.5 292C11.9 292.8 9.83333 290.333 9 289H6L12.0002 261.5V241.5C2.00022 230.3 27.1669 226.167 41.0002 225.5V197L39.0002 194V189H36.0002V179.5C34.9463 179.349 32.9404 179.145 32.5625 179.401C32.5419 179.439 32.5211 179.472 32.5002 179.5C32.5002 179.461 32.522 179.429 32.5625 179.401C33.7222 177.261 34.3365 159.343 34.5002 150.5C35.7002 130.5 38.0002 124.167 39.0002 123.5L91.0002 131.5L113.5 54L126.5 55V49.5C122.9 48.7 122.334 46.5 122.5 45.5L114 44L113.5 36.5L111.5 35.5L110.5 33.5L107.5 30.5L108 28.5L103.5 26.5L108.5 7.5L132.5 11V9.5L134 9L134.5 6.5H137V5L134.5 2.5Z"
								fill="#0066FF"
								fill-opacity="0.4"
							/>
						</g>
					</Link>
					<Link
						extend
						to="planning"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<g
							cursor="pointer"
							pointer-events="all"
							onMouseEnter={() => setIsShown2(true)}
							onMouseLeave={() => setIsShown2(false)}
							onClick={() => plan.current.changeBlock(1)}
						>
							<path
								style={
									isShown2 ? opacity.Active : opacity.Inactive
								}
								transform="translate(1619, 0)"
								d="M20.5 246V228.5L8 200H10.5L0 177V174L93 127L162 119L239 145.5L239.5 156C241.333 154.5 245.9 152.5 249.5 156.5C251.167 152.333 258.3 141.6 273.5 132L290 135L293.5 110.5L296.5 107.5L301.5 108.5L303.5 121C312.826 121.666 335.966 125.095 353.96 133.481C353.887 133.276 356.242 131.443 357.5 130.5C357.5 129.5 358.4 127.2 362 126V123.5L359.5 121V119.5L360.5 119L361 117C358 112 355.1 101.2 367.5 98C371.5 98.5 378 102.9 372 116.5C372 116.9 372.667 118 373 118.5V119.5L371 121V124.5L377 132L392.5 135L392 138L390.5 138.5L390 141L389.5 143L388 145L387.5 149.5V150.5C390.833 146.833 399.7 138.6 408.5 135V133L400.5 132.5L401 126.5L391 119.5V117L417 106C418.667 102.333 422.2 94.9 423 94.5C423.8 94.1 423.333 90.3333 423 88.5C420.833 82.8333 419.1 71.1 429.5 69.5C430.998 69.3336 434.49 69.998 436.491 73.982C436.594 73.2115 455.721 47.8933 470 41L489 46L493 16L497.5 13L503 14.5L504 26.5C510.833 26 527.9 26.4 541.5 32C542 32 558.5 35 565.5 39.5H571.5L573.5 35L575.5 32L577.5 30L578.5 26.5L575.5 24L577.5 21C574.833 15.6667 571.8 4 581 0C581 0.4 588 0.166667 591.5 0C593.833 3.33333 597.1 11.8 591.5 19L593 21L591.5 24L590 25.5V28.5L593 30L594 32L615.5 38V42L613 43.5V47.5L610 52V59.5L606 60L601.5 66.5V69.5L629.5 58L857 28.5L940 96V1350L295 1508L210 1469L30.5 1451.5L32 1153L28.5 1089V359L32 351H36.5V343L49 335L28.5 330L21.5 301V261L27 255.5C25.3333 252.667 21.7 246.8 20.5 246Z"
								fill="#0066FF"
								fill-opacity="0.4"
							/>
						</g>
					</Link>
				</svg>

				<Styled.ImageTag1>
					<Styled.SaleIcon src="./images/image-map/sale-tag.jpg" />
					Корпус Б
				</Styled.ImageTag1>
				<Styled.ImageTag2>
					<Styled.SaleIcon src="./images/image-map/sale-tag.jpg" />
					Корпус А
				</Styled.ImageTag2>

				<Styled.FloorMapSecond>Корпус А</Styled.FloorMapSecond>
				<Styled.FloorMapOne>Корпус Б</Styled.FloorMapOne>

				<svg
					className="layout"
					viewBox="0 0 755 515"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<foreignObject x="0" y="0" width="100%" height="100%">
						<picture style={{ display: 'block' }}>
							<source
								srcSet="/images/image-map/layout.webp"
								media="(min-width: 768px)"
							/>
							<source
								srcSet="/images/image-map/layout.jpg"
								media="(min-width: 768px)"
							/>
							<source
								srcSet="/images/image-map/layout-576.webp"
								media="(max-width: 576px)"
							/>
							<source
								srcSet="/images/image-map/layout-576.jpg"
								media="(max-width: 576px)"
							/>
							<img
								src="/images/image-map/layout.jpg"
								style={{ minWidth: '100%' }}
							/>
						</picture>
					</foreignObject>
					<Link
						extend
						to="planning"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<g
							cursor="pointer"
							pointer-events="all"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
							onClick={() => plan.current.changeBlock(0)}
						>
							<path
								style={
									isShown ? opacity.Active : opacity.Inactive
								}
								d="M292.176 6.10352e-05H393.063L393.062 287.39H292.176V277.309L218.064 277.309V287.032H114.14V269.987L13.3839 269.987L13.3839 177.938H9.15527e-05L9.15527e-05 112.658H13.3839L13.3839 17.7087L114.14 17.7087V0.663422H218.064L218.064 5.84012L292.176 5.84012V6.10352e-05Z"
								fill="#0066FF"
								fill-opacity="0.4"
							/>
						</g>
					</Link>
					<Link
						extend
						to="planning"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<g
							cursor="pointer"
							pointer-events="all"
							onMouseEnter={() => setIsShown2(true)}
							onMouseLeave={() => setIsShown2(false)}
							onClick={() => plan.current.changeBlock(1)}
						>
							<path
								style={
									isShown2 ? opacity.Active : opacity.Inactive
								}
								transform="translate(394, 0)"
								d="M83.0193 489L83.0193 444.535H65.9878L65.9878 340.57H85.9174V313.412L39.1118 266.671H2.90466L2.90466 286.502H0L0 0H2.90466V5.17911H85.9174V0L230.506 0V7.52789L231.26 10.4167L232.995 12.0498L235.613 12.7525H240.09L240.09 20.0852H250.565L265.777 21.3279L282.107 26.1752L299.892 36.3772L311.251 46.5531L322.973 63.5478L328.217 75.9164L331.94 91.8441V105.098L331.94 112.046H339.381V117.785L340.791 120.368L343.371 121.773H344.553H352L352 266.417H346.828L346.828 340.57H352L352 444.535H334.969L334.969 489H207.236L83.0193 489Z"
								fill="#0066FF"
								fill-opacity="0.4"
							/>
						</g>
					</Link>
				</svg>
			</Styled.ImageMapContainer>
		</>
	)
}

export default ImageMap
