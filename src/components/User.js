import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class User extends Component {



    render() {
        return (

            <div className="card mx-auto" style={{ width: '12rem', margin: '1rem' }}>
                <img src={this.props.user.avatar_url} className="card-img-top my-2" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.user.login}</h5>

                    {/* <Link to={this.props.user.html_url} >  */}

                    <Link to={`/user/${this.props.user.login}`} >
                        <button className="btn btn-primary"
                        >
                            More</button></Link>
                </div>
            </div>



        )
    }
}

export default User
