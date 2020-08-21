import React, { Component } from "react";

class UserForm extends Component {
    state = {
        input: "",
    };

    inputHandler = (e) => {
        this.setState({
            input: e.target.value,
        });
    };

    formSubmitHandler = (e) => {
        e.preventDefault();

        if (this.state.input.length === 0) {
            this.props.getAlert("Please Enter Something!", true);
        } else {
            this.props.getUser(this.state.input);
        }

        this.setState({
            input: "",
        });







    };

    clearBtn = () => {

        this.props.hideUsers()

    }
    render() {
        return (
            <div className='container'>
                <h2 className='text-center my-3  text-underline'>
                    Search Github Users Here.
        </h2>

                <form onSubmit={this.formSubmitHandler}>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>User</label>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleInputPassword1'
                            autoFocus
                            onChange={this.inputHandler}
                            value={this.state.input}
                            autoComplete='off'
                        ></input>
                    </div>

                    <input
                        type='submit'
                        className='btn btn-primary text-center container'
                        value='Submit'
                    ></input>
                </form>

                {this.props.hideUsers ? <button
                    className='btn btn-dark my-2 text-center container'
                    onClick={
                        this.clearBtn
                    }
                >Clear</button> : ''}

            </div>
        );
    }
}

export default UserForm;
