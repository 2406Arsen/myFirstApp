import React from 'react'
import {handleResponse} from '../../helper'
import './table.css'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading : false,
            currencies : [],
            error: null,
        }
    }
    componentDidMount(){
        this.setState({
            loading:true
        })
        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
        .then(handleResponse)
            .then((data) => {
                this.setState({
                    currencies:data.currencies,
                    loading:false,
                });
            }
        )
    }
    renderChangePercent(percent){
        if(percent>0){
            return <span className="percent-raised">
                {percent}&uarr;
                </span>
        }else if (percent<0){
            return <span className="percent-fallen">
                {percent}&darr;
            </span>
        }else{
             return <span>{percent}</span>
        }
    }
    render() {
            const {loading, currencies, error} = this.state;//destrukturizacia;
           
            if(loading){
                return (
                    <div>
                        loading..............
                    </div>
                )
            }
            return(
                <div className="Table-container">
                    <table className="Table">
                        <thead className="Table-head">
                            <tr>
                                <th>Cryptocurrency</th>
                                <th>Price</th>
                                <th>Markey Cap</th>
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
                                            {this.renderChangePercent(item.percentChange24h)}
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
    
}
export default List ;
