import React from "react";
import Garage from './Garage';
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'blue'
        }
    }

    render() {
        const { model } = this.props
        return (
            <>
                <p>This car is {this.state.color} {model}</p>
                <Garage size={'small'} />
            </>
        )
    }
}

export default Car;