import {QuestionActionsTypes, SAVE_QUESTIONS, SET_QUESTION_ASKED, SET_QUESTION_DOWNLOADED} from '../ActionsTypes/questionActions';
import {QuestionInterface, singleQuestionInterface} from '../../Interfaces/questionInterface';

interface questionActionInterface {
    type : typeof SAVE_QUESTIONS,
    payload : QuestionInterface,
}

export const questionActionSave = (questions: QuestionInterface): questionActionInterface => ({
    type: SAVE_QUESTIONS,
    payload: questions,
});


interface questionActionIsAskedInterface {
    type : typeof SET_QUESTION_ASKED,
    payload : singleQuestionInterface,
};

export const questionActionMarkedAsAsked = (questionAlreadyAsked : singleQuestionInterface) : questionActionIsAskedInterface => ({
    type : SET_QUESTION_ASKED,
    payload : questionAlreadyAsked,
});

interface questionActionDownloaded {
    type : typeof SET_QUESTION_DOWNLOADED,
    payload : boolean,
}

export const questionActionDownloaded = (isDownloaded : boolean) : questionActionDownloaded => ({
    type : SET_QUESTION_DOWNLOADED,
    payload : isDownloaded,
});


export type QuestionOperationsTypes  =  questionActionInterface | questionActionIsAskedInterface | questionActionDownloaded;