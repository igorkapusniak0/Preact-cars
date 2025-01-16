import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { Header } from './components/Header';
import './style.css';
import { Home } from './pages/Home/index.jsx';

export function App() {
	return(
		<>
			<Header />
			<br/>
			<Home/>
		</>
		
		
	)
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
