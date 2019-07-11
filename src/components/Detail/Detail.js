import React from 'react'
import './Detail.css'

class Deatail extends React.Component  {
    constructor () {
        super()
    }
    render () {
        console.log(this.props)
        return (
            
            <h1>{this.props.match.params.id}</h1>
        )
    }
}

export default Deatail;