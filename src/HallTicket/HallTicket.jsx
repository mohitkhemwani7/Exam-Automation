import React from "react";
import {firestore} from '../firebase';
import {withRouter} from "react-router-dom";
import {Button, Col, Form} from "react-bootstrap";
import './HallTicket.css';

const I = [
    {value: 'Engineering Maths I', name: 'Engineering Maths I'},
    {value: 'Graphics', name: 'Graphics'},
    {value: 'Programming Language', name: 'Programming Language'},
    {value: 'Electrical Engineering', name: 'Electrical Engineering'},
    {value: 'Civil Engineering', name: 'Civil Engineering'}
];

const II = [
    {value: 'Engineering Maths II', name: 'Engineering Maths II'},
    {value: 'Mechanics', name: 'Mechanics'},
    {value: 'Electronic Engineering', name: 'Electronic Engineering'},
    {value: 'Graphics II', name: 'Graphics II'},
    {value: 'Mechanical Engineering', name: 'Mechanical Engineering'}

];

const III = [
    {value: 'Discret Mathematics', name: 'Discret Mathematics'},
    {value: 'Digital Electonics', name: 'Digital Electonics'},
    {value: 'Data Structures', name: 'Data Structures'},
    {value: 'OOP', name: 'OOP'},
    {value: 'COMT', name: 'COMT'},
];

const IV = [
    {value: 'Engineering Maths III', name: 'Engineering Maths III'},
    {value: 'Computer Graphics', name: 'Computer Graphics'},
    {value: 'Advance Data Structures', name: 'Advance Data Structures'},
    {value: 'MIcroprocessors', name: 'MIcroprocessors'},
    {value: 'Programming Language', name: 'Programming Language'},

];

const V = [
    {value: 'TOC', name: 'TOC'},
    {value: 'DBMS', name: 'DBMS'},
    {value: 'SE', name: 'SE'},
    {value: 'CN', name: 'CN'},
    {value: 'Elective I', name: 'Elective II'},

];

const VI = [
    {value: 'Design of Algoriths', name: 'Design of Algoriths'},
    {value: 'SP & OS', name: 'SP & OS'},
    {value: 'ES & IOT', name: 'ES & IOT'},
    {value: 'SM', name: 'SM'},
    {value: 'Web Technology', name: 'Web Technology'}];


const VII = [
    {value: 'HPC', name: 'HPC'},
    {value: 'AI', name: 'AI'},
    {value: 'Data Analytics', name: 'Data Analytics'},
    {value: 'Elective I', name: 'Elective I'},
    {value: 'Elective II', name: 'Elective II'},

];
const VIII = [
    {value: 'Machine Learning', name: 'Machine Learning'},
    {value: 'Cyber Security', name: 'Cyber Security'},
    {value: 'Elective III', name: 'Elective III'},
    {value: 'Elective IV', name: 'Elective IV'},


];

class HallTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        firestore.collection("student")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data);
                this.setState({ students: data });
            });
    }

    render() {
        const { students } = this.state;
        return (
            <div className="row">
                {students.map(user => (
                    user.email === sessionStorage.user1 &&
                    <div key={user.uid} className="col-lg-6 col-md-6 col-s-12 mb-4">
                        <br/>
                        <br/>
                        <br/>
                        <div className="card-new">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Name={user.firstname}{user.lastname}</h5>
                                    <p>Gr.No= {user.grno}</p>
                                    <p>Year of Study={user.year}</p>
                                    <p>Semester={user.semester}</p>
                                    {user.semester === 'I' &&
                                    <Form.Row id="subjects">
                                        <Form.Group as={Col} md="4">
                                            <Form.Label>Your Subjects are:</Form.Label>
                                            {
                                                I.map((e, key) => {
                                                    return <option key={key} value={e.value}>{e.name}</option>;
                                                })}
                                        </Form.Group>

                                    </Form.Row>
                                    }

                                    {user.semester === 'II' &&
                                    <Form.Row id="subjects">
                                        <Form.Group as={Col} md="4">
                                            <Form.Label className="label1">Your Subjects are:</Form.Label>
                                            {II.map((e, key) => {
                                                return <option key={key} value={e.value}
                                                               onLoad={this.handleSubjects}>{e.name}</option>;
                                            })}
                                        </Form.Group>

                                    </Form.Row>
                                    }

                                    {user.semester === 'III' &&
                                    <Form.Row id="subjects">
                                        <Form.Group as={Col} md="4">
                                            <Form.Label>Your Subjects are:</Form.Label>
                                            {III.map((e, key) => {
                                                return <option key={key} value={e.value}>{e.name}</option>;
                                            })}
                                        </Form.Group>

                                    </Form.Row>
                                    }

                                    {user.semester === 'IV' &&
                                    <Form.Row id="subjects">
                                        <Form.Group as={Col} md="4">
                                            <Form.Label>Your Subjects are:</Form.Label>
                                            {IV.map((e, key) => {
                                                return <option key={key} value={e.value}>{e.name}</option>;
                                            })}
                                        </Form.Group>

                                    </Form.Row>
                                    }

                                    {user.semester === 'V' &&
                                    <Form.Row id="subjects">
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


                                    {user.semester === 'VII' &&
                                    <Form.Row id="subjects">
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

                                    {user.semester === 'VIII' &&
                                    <Form.Row id="subjects">
                                        <Form.Group as={Col} md="4">
                                            <Form.Label>Your Subjects are:</Form.Label>
                                            {VIII.map((e, key) => {
                                                return <option key={key} value={e.value}>{e.name}</option>;
                                            })}
                                        </Form.Group>

                                    </Form.Row>
                                    }
                                </div>
                                <Button onClick={() => window.print()}>Print</Button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default withRouter(HallTicket);