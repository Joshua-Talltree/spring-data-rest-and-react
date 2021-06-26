import React from 'react';

const Employee = (props) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>{props.first}</th>
                <th>{props.last}</th>
                <th>{props.description}</th>
            </tr>
            </tbody>
        </table>
    )
}

