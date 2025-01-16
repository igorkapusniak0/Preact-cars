import { CarCard } from "./CarCard";


function CarList(props) {
    if (props.cards.length === 0){
        return (
            <div>
                <h2>No Cars Added</h2>
            </div>
        );
    }
  
    
    return(
        <div>
            {props.cards.map((car) => {
                return(
                    <>
                        <CarCard key={car.title} car={car} />
                        <br/>
                    </>
                )
            }
            )}
        </div>
    )
        
    
}
  
  export default CarList;