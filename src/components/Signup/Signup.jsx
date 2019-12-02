import React from 'react';
import './signup.css'
import {withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import {Flex, Box, Text} from 'rebass'

class Signup extends React.Component {

    state = {
        email: '',
        password: '',
        error: null,
    };
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };


    render() {
        const {email, password, submitted, error} = this.state;
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="active"> Sign UP </h2>
                        {error ? (
                            <Flex>
                                <Box>
                                    <Text>{error.message}</Text>
                                </Box>
                            </Flex>
                        ) : null}
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                <label htmlFor="mobile">Email</label><br/>
                                <input type="text" className="form-control fadeIn second" name="email"
                                       value={email} id="login"
                                       onChange={this.handleInputChange}/>
                                {submitted && !email &&
                                <div className="help-block">Mobile is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control fadeIn third" name="password"
                                       value={password} id="password"
                                       onChange={this.handleInputChange}/>
                                {submitted && !password &&
                                <div className="help-block">Password is required</div>
                                }
                                <input type="submit" className="fadeIn fourth" value="Register"/>
                            </div>

                        </form>
                    </div>
                </div>
            </React.Fragment>


        );
    }
}

export default withRouter(Signup);
