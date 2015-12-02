import React, { PropTypes, Component } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'

class Counter extends Component {
    render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
        return (
            <div>
                <h1>Clicked: {counter} times</h1>
                <RaisedButton onClick={increment} label="+" />

                <RaisedButton onClick={decrement} label="-" />

                <RaisedButton onClick={incrementIfOdd} label="Increment if odd" />

                <RaisedButton onClick={() => incrementAsync()} label="Increment async" />
            </div>
        )
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}

export default Counter
