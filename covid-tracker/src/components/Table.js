import React from 'react'
import './Table.css'
import numeral from 'numeral'

function Table({countries}) {
    return (
        <div className="table">
            {countries.map(({country,countryInfo, cases}) => (
             <tr>
                 <div className="table-flag" style={{backgroundImage: `url(${countryInfo.flag})`}}/>
                 <td>{country}</td>
                 <td><strong>{numeral(cases).format("0,0")}</strong></td>
             </tr>   
            ))}
        </div>
    )
}

export default Table
