import React, { PropTypes, Component } from 'react'
import {Jumbotron, ButtonGroup, Button } from 'react-bootstrap'

class Counter extends Component {
    render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
        return (
            <div>
                <Jumbotron>
                    <h1>Clicked: {counter} times</h1>
                </Jumbotron>
                <ButtonGroup vertical block>
                    <Button onClick={increment}>+</Button>
                    <Button onClick={decrement}>-</Button>
                    <Button onClick={incrementIfOdd}>Increment if odd</Button>
                    <Button onClick={() => incrementAsync()}>Increment async</Button>
                </ButtonGroup>
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
