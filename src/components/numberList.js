import React from "react";

export default function numberList({numbers}) {
    return (
        <ul>
            {numbers.map((number, key) => {
                return (
                    <li key={key}>
                        {number}
                    </li>
                )
            })}
        </ul>
    );
}