import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import CarList from './components/CarList.jsx';
import { Header } from './components/Header.jsx';
import './style.css';

const cardArray = [
	{title: "bmw"},
	{title: "merc"},
	{title: "Toyota"}
]

export function App() {
	
	return (
		<LocationProvider>
			<Header />
			<main>
				<CarList cards={cardArray}/>
			</main>
			
		</LocationProvider>
		
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
