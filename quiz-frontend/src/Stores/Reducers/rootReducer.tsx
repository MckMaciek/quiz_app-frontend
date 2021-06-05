import {combineReducers} from "redux";
import userReducer from './userReducer';
import questionReducer from './questionReducer';
import userSummaryReducer from './userSummaryReducer';

const rootReducer = combineReducers(
    {
        userReducer : userReducer,
        questionReducer : questionReducer,
        userSummaryReducer : userSummaryReducer,
    }
)   

export default rootReducer;