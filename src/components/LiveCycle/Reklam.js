import React from 'react'
import {API_URL} from '../../config'
import {handleResponse} from '../../helper'
class Reklam extends React.Component  {
    constructor () {
        super()
        this.state = {
            currency : {}
        }
    }

   updateCurrency = () => {
    fetch(`${API_URL}/cryptocurrencies/bitcoin`)
    .then(handleResponse)
    .then(data => {
        this.setState({
            currency: data
        })
    })
    }

    componentDidMount(){
        this.updateCurrency()
        this.interval = setInterval(this.updateCurrency,2000);
    }
    componentWillUnmount(){
        console.log('close');
        clearInterval(this.interval)
    }
    
    render () {
        
        console.log(this.state.currency)
        return(
            <div>
                <h2>Reklam</h2>
            </div>
        )
    }
}
export default Reklam;