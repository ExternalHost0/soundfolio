import React, { useReducer, useContext } from 'react';
import initialState from './initial-state.json';

//** the main context where state data is persisted
const AppContext = React.createContext([{}, () => {}]);

//** a useAppState hook that allows apps to dispatch updates to the AppContext from anywhere
const useAppState = () => {
    let [state, dispatch] = useContext(AppContext);

    return [
        state,

        //** wrap the dispatch function so you can identify the type of update being made, storing granular state
        (action, data) => {
            dispatch({ type: action, data });
        }
    ];
}

//** a provider that exposes a reducer handle state changes as the state handler for the context provider
const AppStateProvider = (props) => {
    //** create a reducing using the initial state
    let stateHandler = useReducer(AppStateHandler, initialState);

    return (
        <AppContext.Provider value={ stateHandler }>
            { props.children }
        </AppContext.Provider>
    );
}

//** an app state handler to delegate updates to the state object based on the action
const AppStateHandler = (state, action) => {
    if(!action) return state;

    const actionType = action.type;
    const data = action.data;

    switch(actionType) {
        case 'showDialog':
            state = { ...state, showDialog: data };
            break;

        case 'currentDialog':
            state = { ...state, currentDialog: data };
            break;

    }

    return { ...state };
}

export {
    AppContext,
    AppStateProvider,
    useAppState
}