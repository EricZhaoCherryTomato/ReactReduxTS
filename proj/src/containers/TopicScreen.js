import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as topicsActions from '../store/actions';
import * as topicsSelectors from '../store/topics/reducer';

class TopicsScreen extends Component {
    componentDidMount() {
        this.props.dispatch(topicsActions.fetchTopics());
    }
    render() {
        return (
            <h2>Where are my topics?</h2>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        rowsById: topicsSelectors.getTopicsByUrl(state),
        rowsIdArray: topicsSelectors.getTopicsUrlArray(state)
    };
}

export default connect(mapStateToProps)(TopicsScreen);