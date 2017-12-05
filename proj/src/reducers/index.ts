import { combineReducers } from 'redux'

import { Action } from '../actions'

export type Counter = { value: number }

export type All = {
    counter: Counter,
    isSaving: boolean,
    isLoading: boolean,
    error: string,
}

const counterState: Counter = {
    value: 0,
}

function counter (state: Counter = counterState, action: Action): Counter {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            const { delta } = action
            return { value: state.value + delta };

        case 'RESET_COUNTER':
            return { value: 0 };

        default:
            return state
    }
}

export const initialState = {
    counter: counterState,
    isSaving: false,
    isLoading: false,
    error: '',
};

const reducers = combineReducers<All>({
    counter
});

export default reducers