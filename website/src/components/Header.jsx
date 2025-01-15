import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/add_car" class={url == '/add_car' && 'active'}>
					Manage Cars
				</a>
			</nav>
		</header>
	);
}
