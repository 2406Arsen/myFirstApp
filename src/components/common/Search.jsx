import React from 'react'
import Loading from './Loading'
import {API_URL} from '../../config'
import {handleResponse} from '../../helper'
import './Search.css'
import search from './search.png'
import {withRouter} from 'react-router-dom'

class Search extends React.Component {
    constructor () {
        super ()
        this.state = {
            searchResault:[],
            searchQuery : '',
            loading:false
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        const searchQuery = event.target.value
        this.setState({
            searchQuery,
        })
        this.setState({
            loading:true
        })     
        
        if(!searchQuery){
            return '';
        }

        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
        .then(handleResponse)
        .then(result => {
            this.setState({
                searchResault:result,
                loading:false,
            })
        })
  }

    handleRedirect(currencyID) {
        console.log(currencyID);
        this.props.history.push(`/currency/${currencyID}`)
        this.setState({
            searchQuery : '' ,
            searchResault : []
        })
    }

  
    renderSearchResault () {
        const {searchQuery,searchResault,loading} = this.state
        if(!searchQuery){
            return ''
        }
        if (searchResault.length>0) {
            return (
                <div className="Search-result-container">
                    {
                        searchResault.map(item => (
                            <div 
                                key = {item.id}
                                className="Search-result"
                                onClick={()=>this.handleRedirect(item.id)}
                            >
                                {item.name}({item.symbol})
                            </div>
                        ) )
                    }
                </div>
            )
        }
        
        return (
            <div className="Search-result-container">
                <div className="Search-no-result">No Result</div>
            </div>  
        )

    }

    render(){
        console.log(this.props); 
        
        const {loading,searchQuery} = this.state
        
        return (
            <div className="Search">
                <span className="Search-icon"></span>
                <input
                    className = "Search-input" 
                    type="text"
                    name="searchQuery"
                    //ref = {(input) => this.searchQuery = input}
                    placeholder = "Currency Name"
                    onChange = {this.handleChange}
                    value = {searchQuery}
                />
                  {
                    loading &&  <div className="Search-loading">
                                    <Loading  width="16px" height="16px"/>
                                </div>
                  }

                {this.renderSearchResault()}
            </div>
        )
    }
}

export default  withRouter(Search);