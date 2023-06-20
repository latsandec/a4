import { combineReducers } from 'redux';
import buttonAdd from './buttonAdd';
import selectItem from './selectItem';

const rootReducer = combineReducers({
    buttonAdd,
    selectItem
});

export default rootReducer;