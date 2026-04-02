import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../redux/modeSlice'
import { setPosition } from '../redux/positionSlice'
import './Main.css'

export default function Main() {
	const darkMode = useSelector(state => state.mode)
	const position = useSelector(state => state.position)
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	return (
		<div className={`main-container ${darkMode ? 'dark' : 'light'}`}>
			<header className='main-header'>
				<h1>Dashboard</h1>
				<button
					className='mode-toggle'
					onClick={() => dispatch(toggleDarkMode())}
				>
					{darkMode ? '☀️ Kun' : '🌙 Tun'}
				</button>
			</header>

			<section className='content-section'>
				<h3>
					Hozirgi holat: <span className='status-text'>{position}</span>
				</h3>

				<div className='controls-group'>
					<input
						className='main-input'
						type='text'
						placeholder='Matn yozing...'
						value={text}
						onChange={e => setText(e.target.value)}
					/>

					<button
						className='btn btn-update'
						onClick={() => {
							if (text.trim()) {
								dispatch(setPosition(text))
								setText('')
							}
						}}
					>
						Yangilash
					</button>

					<button
						className='btn btn-secondary'
						onClick={() => dispatch(setPosition('Ketmon'))}
					>
						Ketmon
					</button>
				</div>
			</section>
		</div>
	)
}
