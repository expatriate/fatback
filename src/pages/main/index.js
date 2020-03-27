import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div className="main-page">
                <h1 className="title">
                    Video Editor
                </h1>
                <div className={`main-page__content`}>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(
    state => {
        return {
        };
    }, mapDispatchToProps
)(MainPage);
