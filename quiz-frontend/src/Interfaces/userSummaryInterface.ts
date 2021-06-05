export default interface userSummary {
    result : {
        [index : number] : {
            question_num : string,
            question : string,
            wasCorrect : boolean,
            choosenAnswer : string,
        }
    },
    numOfQuestions : number,
};