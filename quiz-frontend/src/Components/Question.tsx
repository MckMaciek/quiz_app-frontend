import { Backdrop, createStyles, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {QuestionInterface} from '../Interfaces/questionInterface';
import React, { FunctionComponent, useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {SummaryBeingSaved} from '../Stores/Actions/userSummaryActions';

import {
    Redirect
  } from 'react-router-dom';


type QuestionProps = {
    questions : any,
    questionAnsweredHistory : any,
}


const Question : FunctionComponent<QuestionProps>  = ({questions, questionAnsweredHistory} )  =>{

    const classes = useStyles();
    let history = useHistory();

    const finalNumOfQuestions = 8;

    const [choosenAnswer, setChoosenAnswer] = useState('');
    const [valid, setValid] = useState(false);
    const [points, setPoints] = useState(0);
    const [numOfQuestion, setNumOfQuestion] = useState(0);

    const questionReducerSelector = useSelector((state : any) => state.userSummaryReducer.result)
    const dispatch = useDispatch()

    const INIT_BACKGROUND_STATE =  [{isSet : false},
                                    {isSet : false},
                                    {isSet : false},
                                    {isSet : false}]

    const [background, setBackground] = useState(INIT_BACKGROUND_STATE);

    var { url_id } : any  = useParams();

    useEffect(()=>{
        //NEEDS TO BE HERE BECAUSE IT WIL LRERENDER COMPONENT WHEN THE DATA COMES
    }, [questions])


    const randomQuestion = () =>{

        var randomQuestionNum = Math.floor(Math.random() * 30); 

        let tableOfAll = questionAnsweredHistory.filter((question : any) =>{
            if(question.question_num === randomQuestionNum+'') return true;
        })

        while(tableOfAll.length !== 0){
            randomQuestionNum = Math.floor(Math.random() * 30); 
            tableOfAll = questionAnsweredHistory.filter((question : any) =>{
                if(question.question_num === randomQuestionNum+'') return true;
            })
            if(tableOfAll.length === 0) break;
        }

        return randomQuestionNum;

    }
                                            
    const colorAnswer = (answerNum : number) =>{
        if(background[answerNum].isSet === false){

            setBackground(background.map(back =>{
                if(back.isSet === true) back.isSet = false;
                return back; 
            }))
            
            setBackground(background => [...background, Object.assign(background[answerNum], {isSet : true})]);
        }

        else setBackground(background => [...background, Object.assign(background[answerNum], {isSet : true})]);    
    }

    const checkIfAnswerIsValid = (answerNum : number) =>{       
        if(questions.questions[url_id].answers[answerNum].correct === true) setValid(true);
        else setValid(false);  
        
        setChoosenAnswer(questions.questions[url_id].answers[answerNum]);
        colorAnswer(answerNum);
    }

    const CheckIfNumberOfQuestionIsOnLimit = () =>{

        if (numOfQuestion === finalNumOfQuestions){
            dispatch(SummaryBeingSaved(questionAnsweredHistory));
            return(
                <Redirect to={`/summary`} />
           );
        }
    }

    const checkQuestionNumber = () =>{

        if(questions.isDownloaded === false){
            return( 
            <>
                <CircularProgress color="secondary" />
                <p className={classes.textColor}> WAITING FOR SERVER TO CONNECT...</p>
            </>
            );
        }
        else{
        return(
            <>
                <div className={classes.question}
                >
                    <p className={classes.Qtext}>{questions.questions[url_id].question}</p>
                </div>

                <div className={(background[0].isSet !== true) ? classes.answer : classes.answerClicked} 
                     onClick={() => checkIfAnswerIsValid(0)}
                >
                    <p className={classes.Atext}>
                    {questions.questions[url_id].answers[0].answer}</p>
                </div>

                <div className={(background[1].isSet !== true) ? classes.answer : classes.answerClicked} 
                     onClick={() => checkIfAnswerIsValid(1)}
                >
                    <p className={classes.Atext}>
                        {questions.questions[url_id].answers[1].answer}</p>
                </div>

                <div className={(background[2].isSet !== true) ? classes.answer : classes.answerClicked} 
                     onClick={() => checkIfAnswerIsValid(2)}
                >
                    <p className={classes.Atext}>
                        {questions.questions[url_id].answers[2].answer}</p>
                </div>  

                <div className={(background[3].isSet !== true) ? classes.answer : classes.answerClicked} 
                     onClick={() => checkIfAnswerIsValid(3)}
                >
                    <p className={classes.Atext}>
                        {questions.questions[url_id].answers[3].answer}</p>
                </div>
            </>
            )
        }
    }

    const renderButtons = () =>{

        if(questions.isDownloaded !== false){
        return(
                <div className={classes.operations}>
                <Button 
                    className={classes.next}
                    variant="contained" 
                    color="secondary" 
                    type="submit"
                    onClick={() => {
                        if(valid === true){
                            setPoints(points => points + 1);
                        } 
                        setBackground(INIT_BACKGROUND_STATE);
                        setNumOfQuestion(numOfQuestion => numOfQuestion +1)   

                        questionAnsweredHistory.push({
                            question_num : url_id,
                            question : questions.questions[url_id].question,
                            wasCorrect : valid,
                            choosenAnswer : choosenAnswer,
                        })
                        
                        let finalQuestion  = randomQuestion();
                        history.push(`/question/${finalQuestion}`)}
                    }
                    >   
                    NEXT
                </Button>
                </div>
            );
        }
    }


    return(  
        <>
                <div className={classes.root}>  
                {numOfQuestion === finalNumOfQuestions ? CheckIfNumberOfQuestionIsOnLimit() : ''}
                {checkQuestionNumber()}
                {renderButtons()}
                </div>
        </>
    );
    
}


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        minHeight: '100vh',
    },
    textColor : {
        color : theme.palette.text.secondary,
    },
    question : {
        height : '150px',
        width : '40%',
        background : theme.palette.background.paper,
        border : '5px solid white',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
    answer : {
        height : '75px',
        width : '40%',
        marginTop : '10px',
        background : theme.palette.background.paper,
        border : '5px solid white',
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems : 'center',
        cursor : 'pointer',
    },
    answerClicked : {
        height : '75px',
        width : '40%',
        marginTop : '10px',
        background: '#f34154',
        border : '5px solid white',
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems : 'center',
        cursor : 'pointer',
    },
    operations : {
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'row',
    },
    next : {
        height : '50px',
        width : '150px',
        border : '5px solid white',
        marginTop : '10px',
        marginBottom : '10px',
    },
    back : {
        height : '50px',
        width : '150px',
        border : '5px solid white'
    },
    Qtext : {
        color : theme.palette.text.secondary,
    },
    Atext : {
        paddingLeft : '10px',
        color : theme.palette.text.secondary,
    }


  }));

export default Question;