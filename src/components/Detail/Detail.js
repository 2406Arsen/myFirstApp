import React from 'react'
import {API_URL} from '../../config'
import {handleResponse,renderChangePercent} from '../../helper'
import Loading from '../common/Loading'
import './Detail.css'

class Deatail extends React.Component  {
    constructor () {
        super()
        this.state = {
            currency:{},
            loading:false,
            error:null,
        }
    }
    componentDidMount () {
        const currencyID = this.props.match.params.id
        this.setState({
            loading:true
        })
        fetch(`${API_URL}/cryptocurrencies/${currencyID}`)
        .then(handleResponse)
        .then(currency=>{
            this.setState({
                loading:false,
                currency
            })
        })
       .catch((error)=>{
           this.setState({
               error:error.errorMessage,
               loading:false
           });
           
       })
        
    }
    render () {
        const {currency,error,loading} = this.state
        console.log(this.state.currency);
        
        if(loading){
            return (
                <div className='loading-container'>
                    <Loading />
                </div>
            )
        }
        if(error){
            return(
                <div className="error">
                    {error}
                </div>
            )
        }
        return (            
          <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name}({currency.symbol})
                </h1>
                <div className="Detail-container">
                    <div className="Detail-item">
                        Price <span className="Detail-value"> ${currency.price} </span>    
                    </div>
                    <div className="Detail-item">
                        Rank <span className="Detail-value"> {currency.rank} </span>    
                    </div>
                    <div className="Detail-item">
                    24H Change <span className="Detail-value">  {renderChangePercent(currency.percentChange24h)} </span>    
                    </div>
                </div>
            </div>

        )
    }
}

export default Deatail;