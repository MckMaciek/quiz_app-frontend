
interface userActionsInterface {
    SAVE_USER : string,
    SAVE_USER_IN_PROGRESS : string,
    SAVE_USER_IN_PROGRESS_ERROR : string,

    GET_USER : string,
    GET_USER_IN_PROGRESS : string,
    GET_USER_IN_PROGRESS_ERROR : string,
}


const  userActions : userActionsInterface = {
    SAVE_USER : 'SAVE_USER',
    SAVE_USER_IN_PROGRESS : 'SAVE_USER_IN_PROGRESS',
    SAVE_USER_IN_PROGRESS_ERROR : 'SAVE_USER_IN_PROGRESS_ERROR',

    GET_USER : 'GET_USER',
    GET_USER_IN_PROGRESS : 'GET_USER_IN_PROGRESS',
    GET_USER_IN_PROGRESS_ERROR : 'GET_USER_IN_PROGRESS_ERROR',
}

export default userActions;