import MenuItem from './MenuItem';


export default function MenuList() {
	return (
		<div>
			<h2>Menu List</h2>
			<ul>
				<MenuItem label="Home"/>
				<MenuItem label="About"/>
				<MenuItem label="Contact"/>
			</ul>
		</div>
	)
}
