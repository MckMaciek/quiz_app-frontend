import userActionTypes from '../ActionsTypes/userActionsTypes';


interface User {
    user : {
        name : string,
        email : string,
    }
    isSaved : boolean,
    scored : number,
}

interface saveUserInterface {
    type : typeof userActionTypes.SAVE_USER,
    payload : User, 
}

interface userBeingSavedInterface {
    type : typeof userActionTypes.SAVE_USER_IN_PROGRESS,
    payload : boolean, 
}

interface userBeingSavedErrorInterface {
    type : typeof userActionTypes.SAVE_USER_IN_PROGRESS_ERROR,
    payload : boolean, 
}

export type UserOperationsTypes  = saveUserInterface | userBeingSavedInterface | userBeingSavedErrorInterface;


export const saveUser = (user: User): saveUserInterface => ({
    type: userActionTypes.SAVE_USER,
    payload: user
});

export const userBeingSaved = (isSaved: boolean): userBeingSavedInterface => ({
    type: userActionTypes.SAVE_USER_IN_PROGRESS,
    payload: isSaved,
});

export const userBeingSavedError = (isSaved: boolean): userBeingSavedErrorInterface => ({  //zmienic 
    type: userActionTypes.SAVE_USER,
    payload: isSaved,
});