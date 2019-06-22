import React from  'react';
// import { ninvoke } from 'q';

class Deatail extends React.Component {
    constructor(){
        super()
        this.state = {
            inputValue:''    
        }
        console.log('constructor')
    }
    onInputChange = (e) => {
        this.setState({
            inputValue:e.target.value
        })
    }
    getInputValue = (e) => {
        e.preventDefault()
        console.log(this.state.inputValue)
    }
    componentDidMount()  {
        console.log('ComponentDidMount')
    }
    render () {
        console.log(this.state.inputValue)
        return (
            <div>
               <form onSubmit={this.getInputValue}>
                   <input type="text" onChange={this.onInputChange}/>
                   <button> Click </button>
               </form>
            </div>
        )
    }

}

export default Deatail;
