import userActionsTypes from '../ActionsTypes/userActionsTypes';
import {UserOperationsTypes} from '../Actions/userActions';


interface User{
    name : string,
    email : string,
}

export interface UserReducerState {
    user ?: User,
    isSaved : boolean,
    scored : number,
}

const INITIAL_STATE: UserReducerState = {
    user : undefined,
    isSaved : false,
    scored : 0,
};


const userReducer = () => (state : UserReducerState = INITIAL_STATE, action : UserOperationsTypes) : UserReducerState =>{
    switch(action.type){
        case userActionsTypes.SAVE_USER:
            return {...state, user : action.payload}
        case userActionsTypes.SAVE_USER_IN_PROGRESS:
            return {...state, isSaved : action.payload}

        default :
            return {...state}
    }
}
export default userReducer;