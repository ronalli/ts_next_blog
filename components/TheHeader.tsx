import Navigation from './Navigation'

const TheHeader = () => {
	const navLinks = [
		{label: 'Home', href: '/'},
		{label: 'Blog', href: '/blog'},
		{label: 'About', href: '/about'},
	]


	return (
		<header>
			<Navigation navLinks={navLinks}/>
		</header>
	)
}

export {TheHeader}