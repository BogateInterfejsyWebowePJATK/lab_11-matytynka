import NumberList from "./numberList";
import RandomGenerator from "./randomGenerator";
import react from "react";

export default function randomNumbers({size, min, max}) {

    const [numsList, setNumsList] = react.useState([size])

    react.useEffect( () => {
        generateNumsList()
    }, [])

    const generateNumsList = () => {
        let randomNums = [size]
        for (let i = 0; i < size; i++) {
            randomNums[i] = RandomGenerator(min, max)
        }
        setNumsList(randomNums)
    }

    return(
        <div className="numberList">
            <NumberList numbers={numsList}/>
            <button type="button" onClick={generateNumsList}>Odśwież</button>
        </div>
    )
}
