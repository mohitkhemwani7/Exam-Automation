import React from "react";
import {firestore} from '../firebase';
import {withRouter} from "react-router-dom";

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
                    <div key={user.uid} className="col-lg-6 col-md-6 col-s-12 mb-4">
                        <div className="card h-100">
                            <div className="card">
                                <div className="card-body">
                                    <h5>{user.firstname}</h5>
                                    <h6>{user.lastname}</h6>
                                    <p>{user.grno}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default withRouter(HallTicket);