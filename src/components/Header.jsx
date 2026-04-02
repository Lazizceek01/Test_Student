import {Link} from 'react-router-dom';
import './header.css';

export default function Header() {
	return (
		<div className="header-nav">
			<Link className="header-link" to = {"/"} >Home</Link>
			<Link className="header-link" to = {"/about"} >About</Link>
			<Link className="header-link" to = {"/contact"} >Contact</Link>
			<Link className="header-link" to = {"/service"} >Service</Link>
		</div>
	)
}
