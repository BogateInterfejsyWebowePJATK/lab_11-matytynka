import ListNumber from "./listNumber"
import react from "react"

export default function list({numbers}) {

    const [newNumbers, setNewNumbers] = react.useState(numbers)

    react.useEffect(() => {
        setNewNumbers(numbers)
    }, [numbers])

    function deletion(key) {
        let d = [...newNumbers]
        d.splice(key, 1)
        setNewNumbers(d)
    }

    return (
        <div className="List">
            <ul>
                {newNumbers.map((number, key) => {
                    return (
                        <li key = {key}>
                            <ListNumber number={number}/>
                            <button onClick={ () => deletion(key)}>DELETE</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}