import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Alert from "./components/Alert";
import SingleUser from "./components/SingleUser";
import ContactUs from "./components/ContactUs";
class App extends Component {
    state = {
        users: [],
        alert: null,
        isAlertThere: false,
        user: {},
    };

    getAlert = (msg, alertIsThere) => {
        this.setState({
            alert: msg,
            isAlertThere: alertIsThere,
        });

        setTimeout(() => {
            this.setState({
                isAlertThere: false,
            });
        }, 2000);
    };

    getUser = async (userName) => {
        const response = await fetch(
            `https://api.github.com/search/users?q=${userName}`
        );
        const data = await response.json();

        this.setState({
            users: data.items,
        });
    };

    showUser = async (userName) => {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        this.setState({
            user: data,
        });
    };

    clearBtnHandler = () => {

        if (this.state.users.length > 0) {

            this.setState({
                users: []
            })
            return true

        }

        else {
            return false
        }


    };

    render() {
        return (
            <Router>
                <Navbar />
                <Alert
                    alert={this.state.alert}
                    isAlertThere={this.state.isAlertThere}
                />
                <Switch>
                    {
                        //! 1. Home Route  

                    }


                    <Route
                        exact
                        path='/'
                        render={() => {
                            return (
                                <Fragment>
                                    <UserForm
                                        getUser={this.getUser}
                                        getAlert={this.getAlert}
                                        hideUsers={this.state.users.length > 0 ? this.clearBtnHandler : ''}
                                        users={this.state.users}
                                    />
                                    <Users users={this.state.users} />
                                </Fragment>
                            );
                        }}
                    />
                    {

                        //! 2. About Route
                    }
                    <Route
                        exact
                        path='/about'
                        render={() => {
                            return (
                                <Fragment>
                                    <About></About>
                                </Fragment>
                            );
                        }}
                    />
                    {

                        //! 3. About Me Route
                    }
                    <Route
                        exact
                        path='/aboutme'
                        render={() => {
                            return (
                                <Fragment>
                                    <AboutMe></AboutMe>
                                </Fragment>
                            );
                        }}
                    />
                    {

                        //! 4. Contact Route
                    }
                    <Route
                        exact
                        path='/contact'
                        render={() => {
                            return <ContactUs />;
                        }}
                    />
                    <Route
                        exact
                        path='/user/:login'
                        render={(props) => {
                            return (
                                <SingleUser
                                    showUser={this.showUser}
                                    user={this.state.user}
                                    {...props}
                                />
                            );
                        }}
                    />
                </Switch>


            </Router>


        );
    }
}

export default App;
