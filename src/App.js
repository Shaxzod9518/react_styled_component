import React, { useRef, lazy } from 'react'
import { AppContext } from './context'

import Header from './components/Header'
import About from './components/About'
import Planning from './components/Planning'
import Address from './components/Address'
import Navbar from './components/Navbar'
import BackTop from './components/BackTop'
import ArrowTop from './components/Icons/ArrowTop'
import Footer from './components/Footer'
import Amenities from './components/Amenities'
import Features from './components/Features'
// import Modal from './components/Modal'
import Call from './components/Call'
import GalleryCarousel from './components/GalleryCarousel'
import ImageMap from './components/ImageMap'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './App.css'

const Modal = lazy(() => import('./components/Modal'))

const App = () => {
	const modal = useRef()
	const plan = useRef()

	return (
		<AppContext.Provider value={{ modal, plan }}>
			<Navbar />
			<Header />
			<About />
			<Features />
			<GalleryCarousel />
			<ImageMap />
			<Planning ref={plan} />
			<Amenities />
			<Address />
			<Footer />
			<BackTop>
				<ArrowTop fill="#000000" />
			</BackTop>
			<Modal ref={modal} />
			<Call />
		</AppContext.Provider>
	)
}

export default App
