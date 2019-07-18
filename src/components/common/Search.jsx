import React from 'react'
import Loading from './Loading'
import {API_URL} from '../../config'
import {handleResponse} from '../../helper'
import './Search.css'
import search from './search.png'

class Search extends React.Component {
    constructor () {
        super ()
        this.state = {
            searchQuery : '',
        }
    }

    handleChange = (event) => {
        const searchQuery = event.target.value
        
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
        .then(handleResponse)
        .then(result=>console.log(result))
        
    }

    render(){
        return (
            <div className="Search">
                <span classNam e="Search-icon"></span>
                <input
                    className = "Search-input" 
                    type="text"
                    name="searchQuery"
                    //ref = {(input) => this.searchQuery = input}
                    placeholder = "Currency Name"
                    onChange = {this.handleChange}
                />
            </div>
        )
    }
}

export default Search;