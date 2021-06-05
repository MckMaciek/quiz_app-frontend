import {QuestionOperationsTypes} from '../Actions/questionAction';
import {QuestionActionsTypes} from '../ActionsTypes/questionActions';

interface INIT_STATE {

    isDownloaded : boolean,
    
    questions : {
    [index: number]: {
        id : string,
        question : string,
        wasUsed : boolean,
        [index: number]: {
            id : any,
            answer : string,
            correct : boolean,
        }
    },
}
}

const INIT_STATE = {
    
    isDownloaded : false,
    questions : [{
    id : 'null',
    question : 'none',
    wasUsed : false,
    answers : [
        {
            id : null,
            answer : 'none',
            correct : false,
        },
    ],
}],
}


const questionReducer = (state : INIT_STATE = INIT_STATE, action : any) : INIT_STATE  =>{
    switch(action.type){
        case QuestionActionsTypes.SAVE_QUESTIONS: {
            return {...state, questions : action.payload }
        }
        case QuestionActionsTypes.SET_QUESTION_DOWNLOADED: {
            return {...state, isDownloaded : action.payload}
        }
        
        default :
            return state
    }

};

export default questionReducer;