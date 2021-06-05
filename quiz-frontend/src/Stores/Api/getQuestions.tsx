import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import {questionActionSave, questionActionDownloaded} from '../Actions/questionAction';
import {QuestionInterface} from '../../Interfaces/questionInterface';


export const getQuestionFromApi = async () : Promise<QuestionInterface> =>{

    const tableOfQuestions = await axios.get("http://localhost:8080/api/v1/question/all")
                                        .catch(error => error);

    return tableOfQuestions.data;
}


export const getQuestions = ()  => async (dispatch : ThunkDispatch<{}, {}, any>) => {
    try{
        let questionsArray : QuestionInterface = await getQuestionFromApi();
        if(questionsArray !== undefined){
            dispatch(questionActionSave(questionsArray))
            dispatch(questionActionDownloaded(true));
        }else{
            dispatch(questionActionDownloaded(false));
        }
    }
    finally{
            
    }
};
