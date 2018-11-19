import React, { Component} from 'react';


class Change extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        this.isTrue = this.isTrue(bind);
    }

    isTrue = () => {
        this.setState(state => ({
            show: !state.show
        }));
    }
    render() {
        return (
            <button onClick={this.isTrue}>
                {this.state.isTrue ? </Counter> : null}
            </button>
        );
    }
}


