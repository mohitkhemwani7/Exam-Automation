import React from 'react';
import './login.css'
import {withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import {Col, Container, Row} from "react-bootstrap";
import {Box, Flex, Text} from "rebass";

class LoginPage extends React.Component {

    state = {
        email: '',
        password: '',
        error: null,
        login_user:''
    };
    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user1) => {
                // this.setState({login_user: user.email});
                sessionStorage.setItem('user1', email);

                this.props.history.push('/main');
            })
            .catch((error) => {
                this.setState({error: error});
            });
    };

    handleRegister = () => {
        this.props.history.push('/signup');
    };


    render() {
        const {email, password, submitted,error} = this.state;
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="active"> Sign In </h2>
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
                                <input type="text" pattern=".+@viit.ac.in" className="form-control fadeIn second" name="email"
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
                                <input type="submit" className="fadeIn fourth" value="Log In"/>
                            </div>

                            <Container>
                                <Row>
                                        <h5>Not a User?</h5>
                                        <h5 onClick={this.handleRegister}> Register</h5>
                                </Row>
                            </Container>

                        </form>
                    </div>
                </div>
            </React.Fragment>


        );
    }
}

export default withRouter(LoginPage)
