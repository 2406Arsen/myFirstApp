import React from 'react'
import Reklam from './Reklam'

class ComponentLife extends React.Component  {
    constructor () {
        super()
        this.state = {
            show: true
        }
    }
    changeRandomComponent = () => {
        this.setState({
            show : !this.state.show,
            
        })
    }
    render () {
        let RComponent
            if(this.state.show) {
                RComponent = <Reklam />
            }else{
                RComponent = null

            }
        return(
            <div>
                <h2>Live Cycle</h2>
                <button onClick={this.changeRandomComponent}>
                    {this.state.show ? 'close' : 'open'}
                </button>
                {RComponent}
            </div>
        )
    }
}
export default ComponentLife;