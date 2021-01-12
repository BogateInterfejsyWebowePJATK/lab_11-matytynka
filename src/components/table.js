import TableNumber from "./tableNumber"

export default function table({numbers}) {

    return (
        <div className="Table">
            <table>
                <tr>
                    <th>Binary</th>
                    <th>Octal</th>
                    <th>Hexadecimal</th>
                    <th>Decimal</th>
                </tr>
                {numbers.map((number, key) => {
                    return (
                        <TableNumber number={number}/>
                    )
                })}
            </table>
        </div>
    );
}