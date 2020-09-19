import React, { Component } from 'react'

export class ErrorHandler extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.error)}
            </div>
        )
    }
}

export default ErrorHandler

