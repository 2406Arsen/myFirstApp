import React from 'react'

import './table.css'

const Table = (props) => {
    const {currencies,renderChangePercent} = props
    return(
        <div className="Table-container">
            <table className="Table">
                <thead className="Table-head">
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>   
            </thead>
            <tbody className="Table-body">
                {
                    currencies.map(item=>{
                      
                        return(
                            <tr key={item.id}>
                                <td>
                                    <span className="Table-rank">{item.rank}</span>
                                    <span>{item.name}</span>
                                </td>
                                <td>
                                    <span className="Table-dollar">${item.price}</span>
                                </td>
                                <td>
                                    <span className="Table-dollar">${item.marketCap}</span>
                                </td>
                                <td>
                                    {renderChangePercent(item.percentChange24h)}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

            </table>
        </div>
    )
 
}

export default Table;