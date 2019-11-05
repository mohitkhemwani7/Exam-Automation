import React from 'react';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleAdd = this.handleAdd.bind(this);

    }

    handleAdd(){
        return this.setState({count: this.state.count +1} )
    }

    render() {
        return (
            <React.Fragment>
                <h1>Welcome {this.props.name}</h1>
                <div><p>Count: {this.state.count}</p>
                    <button onClick={this.handleAdd}>+</button>
                </div>
            </React.Fragment>
        )
    }
}

export default LandingPage;