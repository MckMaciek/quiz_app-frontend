
export interface QuestionInterface {
    
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


export interface singleQuestionInterface {
    id : string,
    question : string,
    wasUsed : boolean,
    [index: number]: {
        id : any,
        answer : string,
        correct : boolean,
    },
};
