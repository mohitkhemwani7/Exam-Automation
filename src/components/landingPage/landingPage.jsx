import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

    }

        handleAdd = () => {
            this.props.history.push('/form');
        };

    getHallTicket = () =>{
        this.props.history.push('/hallticket');
    };


    render() {
        return (
            <React.Fragment>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <Button style={{marginLeft:"500px"}} onClick={this.handleAdd}>Add Information</Button>
                    </Col>
                    <Col>
                        <Button  onClick={this.getHallTicket}>Get Hall Ticket</Button>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default withRouter(LandingPage);