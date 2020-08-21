import React, { Component } from 'react'

export class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1 className='text-center my-2'>
                    About Me
                </h1>
                <p className='text-center container'>
                    Hello Everyone my name is Ashish Chaturvedi and I created with application using React (a JavaScript library).
                    This appication searches for Github Users and within the application you can check the information of the user you want to search for I used React-Router for that.
                    I hope you like the application.
                    Thanks! a lot for spending your precious time.
                </p>
            </div>
        )
    }
}

export default AboutMe
