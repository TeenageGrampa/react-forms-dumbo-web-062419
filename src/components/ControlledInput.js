// Code ControlledInput Component Here
import React from 'react'

class ControlledInput extends React.Component {
    state = {
        value: '',
    }

    handlChange = event => {
        this.setState({
            value: event.target.value,
        })
    }

    render(){
        return(
            <form onSubmit={event => this.handlSubmit(event)}>
                <input type="text" value={this.state.value} onChange={this.handlChange} />
            </form>
        )
    }
}

export default ControlledInput