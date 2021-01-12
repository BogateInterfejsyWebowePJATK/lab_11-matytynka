import react from "react"

export default function listNumber({number, key}) {
    const [convert, setConvert] = react.useState("");

    const toBin = (x) => {
        return parseInt(x).toString(2)
    }

    const toOct = (x) => {
        return parseInt(x).toString(8)
    }

    const toHex = (x) => {
        return parseInt(x).toString(16)
    }

    react.useEffect(() => {
        setConvert(number)
    }, [number])

    return (
        <li key={key}>
            <p>{convert}</p>
            <button onClick={() => setConvert(toBin(number))}>Binary</button>
            <button onClick={() => setConvert(toOct(number))}>Octal</button>
            <button onClick={() => setConvert(toHex(number))}>Hexadecimal</button>
        </li>
    )
}