export default function listNumber({number, key}) {

    const toBin = (x) => {
        return parseInt(x).toString(2)
    }

    const toOct = (x) => {
        return parseInt(x).toString(8)
    }

    const toHex = (x) => {
        return parseInt(x).toString(16)
    }

    return (
        <tr>
            <td> {toBin(number)}</td>
            <td> {toOct(number)}</td>
            <td> {toHex(number)}</td>
            <td>{number}</td>
        </tr>
    )
}