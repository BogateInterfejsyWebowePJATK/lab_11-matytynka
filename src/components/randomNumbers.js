import List from "./list"
import Table from "./table"
import RandomGenerator from "./randomGenerator"
import react from "react"

export default function randomNumbers({size, min, max}) {

    const [numsList, setNumsList] = react.useState([size])
    const [numsTable, setNumsTable] = react.useState(false)

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

    if(!numsTable) {
        return(
            <div className="List">
                <List numbers={numsList}/><br/>
                <button type="button" onClick={generateNumsList}>Odśwież</button>
                <button type="button" onClick={() => setNumsTable(true)}>Pokaż w tabeli</button>
            </div>
        )
    } else {
        return (
            <div className="List">
                <Table numbers={numsList}/><br/>
                <button type="button" onClick={generateNumsList}>Odśwież</button>
                <button type="button" onClick={() => setNumsTable(false)}>Pokaż na liście</button>
            </div>
        )
    }
}
