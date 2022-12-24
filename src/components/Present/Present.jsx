import React from 'react'
import './Present.scss'


export default function Present({present}) {

  return (
        <>
            <tr>
             <th scope="row">{present.id}</th>
            <td>{present.product}</td>
            <td>{present.price}</td>
            </tr>
        </>
           
  )
}
