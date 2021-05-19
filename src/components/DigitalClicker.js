import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }
    
    handleIncrement = () => {
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked += 1
            }
        })
    }

    render() {
        return (
            <label>Times Clicked  <button onClick={this.handleIncrement}>{this.state.timesClicked}</button></label>
        )
    }
}