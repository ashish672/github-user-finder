import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class SingleUser extends Component {


    componentDidMount = () => {

        this.props.showUser(this.props.match.params.login)
    }


    render() {
        return (


            <div className="container my-3 jumbotron">

                <div className='row'>
                    <div className=' col-md-6 col-lg-6'>
                        <img src={this.props.user.avatar_url} className="card-img-top text-center" alt="userImage"></img>
                        <h1 className='my-2'>{this.props.user.name}</h1>
                        <h4 className='text'> Location : {this.props.user.location}</h4>
                        <Link to='/'>
                            <button className='btn btn-info my-1'>Back To Search</button>
                        </Link>
                    </div>
                    <div className='col-md-6 col-lg-6'>

                        <p className="lead my-2">{this.props.user.bio}</p>
                        <hr className="my-2"></hr>
                        <button className='btn btn-dark mx-1 my-2'>
                            Followers : {this.props.user.followers}
                        </button>
                        <button className='btn btn-danger mx-1 my-2'>
                            Following : {this.props.user.following}
                        </button>

                        <a href={this.props.user.repos_url} >

                            <button className="btn btn-success btn-lg mx-1 my-2 ">
                                Repos
                            </button>


                        </a>


                        <a href={this.props.user.html_url}>

                            <button className="btn btn-primary btn-lg mx-1 my-2 ">
                                Visit Github Profile
                            </button>
                        </a>

                    </div>
                </div>







            </div>




        )
    }
}

export default SingleUser
