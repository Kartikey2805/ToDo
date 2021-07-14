import {createStore} from 'redux';
import addTaskReducer from './reducers/addTaskReducer';

export const store = createStore(addTaskReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
