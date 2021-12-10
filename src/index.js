import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './config/i18n'
import App from './App'
import Spinner from './components/Spinner'

ReactDOM.render(
	<Suspense fallback={Spinner}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Suspense>,
	document.getElementById('root')
) 
