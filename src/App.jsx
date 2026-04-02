import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sitebar' 
import Students from './components/Students'

export default function App() {
	return (
		<div className='app-layout'>
			<Sidebar />
			<main className='content-area'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/dashboard' element={<Main />} />
					<Route
						path='/about'
						element={<div style={{ padding: '40px' }}>About Page</div>}
					/>
					<Route
						path='/service'
						element={<div style={{ padding: '40px' }}>Service Page</div>}
					/>
					<Route
						path='/contact'
						element={<div style={{ padding: '40px' }}>Contact Page</div>}
					/>
					<Route
						path='/projects'
						element={<div style={{ padding: '40px' }}>Projects Page</div>}
					/>
					<Route
						path='/team'
						element={<div style={{ padding: '40px' }}>Team Page</div>}
					/>
					<Route
						path='/settings'
						element={<div style={{ padding: '40px' }}>Settings Page</div>}
					/>
					<Route path="/" element={<Main />} />
  				<Route path="/dashboard" element={<Main />} />
 				  <Route path="/team" element={<Students />} />
  			 <Route path="/students" element={<Students />} />
				</Routes>
			</main>
		</div>
	)
}
