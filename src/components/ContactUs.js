import React, { Component } from 'react'
class ContactUs extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center my-2'>
                    Contact Us
                </h1>
                <p className='text-center my-1'>
                    You can contact us by filling this form
                </p>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Confirm-Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"></input>
                    </div>

                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>

            </div>
        )
    }
}

export default ContactUs
