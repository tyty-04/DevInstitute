import React from "react"
class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: true,
            toggle: 'ON',
        }
    }
    handleclick() {
        return alert(' i was clicked')
    }
    handleKeyPress(e) {
        if (e.keyCode === 13 && e.code === 'Enter') {
            console.log(e.target.value)
        }
    }

    clicktoggle() {
        const { isToggleOn} = this.state;
        if (isToggleOn) {
            this.setState({ toggle: 'OFF' })
            this.setState({ isToggleOn: false })
        } else {
            this.setState({ toggle: 'ON' })
            this.setState({ isToggleOn: true })

        }
    }

    render() {
        // console.log(this.state)
        return (
            <>
                <input type='text' onKeyUp={(e) => this.handleKeyPress(e)} />
                <button onClick={this.handleclick}>click me!</button>
                <button onClick={()=>this.clicktoggle()}>{this.state.toggle}</button>
            </>
        )
    }

}

export default Events;