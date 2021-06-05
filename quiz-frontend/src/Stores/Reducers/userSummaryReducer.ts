import {SAVE_SUMMARY, SAVE_NUM_OF_QUESTIONS} from '../ActionsTypes/userSummaryActionsTypes';
import {UserOperationsTypes} from '../Actions/userSummaryActions';

export interface userSummaryReducer {
    result : {
    [index : number] : {
        question_num : string,
        question : string,
        wasCorrect : boolean,
        choosenAnswer : string,
    }
},
    numOfQuestions : number;
}

const INITIAL_STATE: userSummaryReducer = {
    result : [{
        question_num : '',
        question : '',
        wasCorrect : false,
        choosenAnswer : 'false',
    }],
    numOfQuestions : 0,
};


const userReducer = (state : userSummaryReducer = INITIAL_STATE, action : any) : userSummaryReducer =>{
    switch(action.type){
        case SAVE_SUMMARY: {
            return {...state, result : action.payload}
        }
        case SAVE_NUM_OF_QUESTIONS : {
            return {...state, numOfQuestions : action.payload}
        }

        default :
            return state
    }
}
export default userReducer;