import React from 'react';
import {withRouter} from "react-router-dom";
import {Button, Col, Form} from "react-bootstrap";
import './StudentForm.css'
import {firestore} from '../../firebase';
import 'react-notifications/lib/notifications.css';
import { NotificationManager} from 'react-notifications';



const I = [
    {value: 'aa', name: 'Graphics'},
    {value: 'bb', name: 'cjzdbj'}
];

const II = [
    {value: 'cc', name: 'cc'},
    {value: 'dd', name: 'dd'}
];

const III = [
    {value: 'aa', name: 'aa'},
    {value: 'bb', name: 'bb'}
];

const IV = [
    {value: 'cc', name: 'cc'},
    {value: 'dd', name: 'dd'}
];

const V = [
    {value: 'cc', name: 'cc'},
    {value: 'dd', name: 'dd'}
];

const VI = [
    {value: 'aa', name: 'aa'},
    {value: 'bb', name: 'bb'}
];

const VII = [
    {value: 'cc', name: 'cc'},
    {value: 'dd', name: 'dd'}
];
const VIII = [
    {value: 'cc', name: 'cc'},
    {value: 'dd', name: 'dd'}
];

class StudentForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            grno: '',
            year: '1',
            semester: 'I',
            Subjects: ["tt", "cns"],
        }
    }

    handleSemester = (event) => {
        console.log("hjdsbchdsb");
        this.setState({semester: event.target.value});
        this.setState({Subjects: [...this.state.Subjects, event.name]})

    };

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubjects = (event) => {
        console.log("Subject gets added");
    };

    handleYear = (event) => {
        this.setState({year: event.target.value});
    };

    handleSubmit = ()=>{
        console.log("nzxjkxbckjdb");
        this.props.history.push('/main');
    };

    addUser = e => {
        e.preventDefault();
        const userRef = firestore.collection("student").add({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            grno: this.state.grno,
            year: this.state.year,
            semester: this.state.semester,
        });
        this.setState({
            firstname: '',
            lastname: '',
            grno: '',
            year: '',
            semester: '',
    });
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <br/>
                    <br/>
                    <h1 style={{textAlign: 'center'}}>Welcome to Computer Department</h1>
                    <br/>
                    <br/>
                </div>
                <div className="student-from">
                    <Form onSubmit={this.addUser}>
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    onChange={this.updateInput}
                                    value={this.state.firstname}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    onChange={this.updateInput}
                                    value={this.state.lastname}
                                />

                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Gr.no</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="grno"
                                    onChange={this.updateInput}
                                    value={this.state.grno}
                                />

                            </Form.Group>
                        </Form.Row>
                        <Form.Row>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Year of Study</Form.Label>
                                <Form.Control as="select" onChange={this.handleYear} value={this.state.year}
                                              name='year'>
                                    <option value='1'>First Year</option>
                                    <option value='2'>Second Year</option>
                                    <option value='3'>Third Year</option>
                                    <option value='4'>Fourth Year</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Semester</Form.Label>
                                <Form.Control as="select" onChange={this.handleSemester} value={this.state.semester}
                                              name='semester'>
                                    <option value='I'>I</option>
                                    <option value='II'>II</option>
                                    <option value='III'>III</option>
                                    <option value='IV'>IV</option>
                                    <option value='V'>V</option>
                                    <option value='VI'>VI</option>
                                    <option value='VII'>VII</option>
                                    <option value='VIII'>VIII</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>

                        {this.state.semester === 'I' &&
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Your Subjects are:</Form.Label>
                                {
                                    I.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.name}</option>;
                                    })}
                            </Form.Group>

                        </Form.Row>
                        }

                        {this.state.semester === 'II' &&
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Your Subjects are:</Form.Label>
                                {II.map((e, key) => {
                                    return <option key={key} value={e.value}
                                                   onLoad={this.handleSubjects}>{e.name}</option>;
                                })}
                            </Form.Group>

                        </Form.Row>
                        }

                        {this.state.semester === 'III' &&
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Your Subjects are:</Form.Label>
                                {III.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>;
                                })}
                            </Form.Group>

                        </Form.Row>
                        }

                        {this.state.semester === 'IV' &&
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Your Subjects are:</Form.Label>
                                {IV.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>;
                                })}
                            </Form.Group>

                        </Form.Row>
                        }

                        {this.state.semester === 'V' &&
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Your Subjects are:</Form.Label>
                                {V.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>;
                                })}
                            </Form.Group>

                        </Form.Row>
                        }

                        {this.state.semester === 'VI' &&
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Your Subjects are:</Form.Label>
                                {VI.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>;
                                })}
                            </Form.Group>

                        </Form.Row>
                        }


                        {this.state.semester === 'VII' &&
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Your Subjects are:</Form.Label>

                                {VII.map((e, key) => {
                                    this.setState({
                                        Subjects: [...this.state.Subjects, e.name]
                                    });
                                    return <option key={key} value={e.value}>{e.name}</option>;
                                })}
                            </Form.Group>

                        </Form.Row>
                        }

                        {this.state.semester === 'VIII' &&
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Your Subjects are:</Form.Label>
                                {VIII.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>;
                                })}
                            </Form.Group>

                        </Form.Row>
                        }

                        <Form.Group>
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                            />
                        </Form.Group>
                        <Button type="submit" >Submit form</Button>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(StudentForm);