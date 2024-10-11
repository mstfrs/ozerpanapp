import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'

import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {


	return (
		<div className="App ">
			<FrappeProvider
				siteName={import.meta.env.VITE_SITE_NAME}
				socketPort={import.meta.env.VITE_SOCKET_PORT}
				url='http://localhost:8001'
				tokenParams={{
					type: 'token',
					useToken: true,
					//token:()=>'api_key:api_secret'
				}}
			>
{/* <Header/> */}
				<Outlet />
				<ToastContainer 
				position="top-center"/>
			</FrappeProvider>
		</div>
	)
}


export default App
