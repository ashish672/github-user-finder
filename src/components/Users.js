import React, { Component } from 'react'
import User from './User'
class Users extends Component {
    render() {
        return (

            <div className='container m-auto'>

                <div className='row mx-auto text-center'>

                    {

                        this.props.users.map((user) => {
                            return (<User

                                user={user}

                                key={user.id} />)
                        })

                    }
                </div>
            </div>


        )
    }
}

export default Users
