import React, { Component } from 'react'

class Alert extends Component {
    render() {
        return (


            this.props.isAlertThere ? <div className="alert alert-danger" role="alert">
                {this.props.alert}
            </div> : ''



        )
    }
}

export default Alert
