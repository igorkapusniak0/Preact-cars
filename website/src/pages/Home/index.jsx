import CarList from '../../components/CarList.jsx';
import '../../style.css';

const cardArray = [
	{
		make: "bmw",
		model: "yarris",
		year: "2010",
		fuelType: "Diesel",
		bodyType: "Hatchback",
		colour: "red",
		transmition: "Manuel",
		roadTax: 180,
		image: "../2d_car.jpg",
		registration: "162kk514",
		odometer: 123445,
		doors: 5,
		seats: 5,
		vehicleType: "Car",
		engine: {
				size: 1.5,
				type: "V6"
			}
		
	},
	{
		title: "merc",
		image: "../2d_car.jpg"
	},
	{
		title: "Toyota",
		image: "../2d_car.jpg"
	}
]

export function Home() {
	
	return (
		<>
			<main>
				<CarList cards={cardArray}/>
			</main>
		</>
		
	);
}