import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../../services/reddit';

export function fetchTopics() {
    return function async(dispatch, getState) {
        try {
            const subredditArray = redditService.getDefaultSubreddits();
            const topicsByUrl = _.keyBy(subredditArray, (subreddit) => subreddit.url);
            dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
        } catch (error) {
            console.error(error);
        }
    };
}