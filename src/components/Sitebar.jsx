import { NavLink } from 'react-router-dom'
import './sitebar.css'

export default function Sidebar() {
	const getMenuItemClass = ({ isActive }) =>
		isActive ? 'menu-item active' : 'menu-item'

	return (
		<aside className='full-sidebar'>
			<div className='sidebar-brand'>
				<div className='brand-logo'>L</div>
				<span>Laziz Dev</span>
			</div>

			<nav className='sidebar-menu'>
				{/* Umumiy Sahifalar */}
				<div className='menu-group'>General</div>
				<NavLink to='/' className={getMenuItemClass}>
					<span>🏠</span> Home
				</NavLink>
				<NavLink to='/about' className={getMenuItemClass}>
					<span>ℹ️</span> About
				</NavLink>
				<NavLink to='/service' className={getMenuItemClass}>
					<span>🛠️</span> Service
				</NavLink>
				<NavLink to='/contact' className={getMenuItemClass}>
					<span>📞</span> Contact
				</NavLink>


				{/* Boshqaruv Paneli */}
				<div className='menu-group'>Management</div>
				<NavLink to='/dashboard' className={getMenuItemClass}>
					<span>📊</span> Dashboard
				</NavLink>
				<NavLink to='/projects' className={getMenuItemClass}>
					<span>📂</span> Projects
				</NavLink>
				<NavLink to='/team' className={getMenuItemClass}>
					<span>👥</span> Team
				</NavLink>
				<NavLink to='/settings' className={getMenuItemClass}>
					<span>⚙️</span> Settings
				</NavLink>
				<NavLink to='/students' className={getMenuItemClass}>
 			   <span>🎓</span> Students
				</NavLink>
			</nav>

			<div className='sidebar-user'>
				<div className='user-avatar'>AD</div>
				<div className='user-name'>Admin</div>
			</div>
		</aside>
	)
}
