import {SAVE_SUMMARY} from '../ActionsTypes/userSummaryActionsTypes';
import userSummary from '../../Interfaces/userSummaryInterface';


interface SummaryBeingSaved {
    type : typeof SAVE_SUMMARY,
    payload : userSummary,
}

export const SummaryBeingSaved = (userSummary: userSummary): SummaryBeingSaved => ({
    type: SAVE_SUMMARY,
    payload: userSummary,
});


export type UserOperationsTypes  =  SummaryBeingSaved