import {UserInterface} from '../Interfaces/userInterface';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { connect, ConnectedProps  } from 'react-redux';
import NoAccess from './NoAccess';
import Question from '../Components/Question';
import {getQuestions} from '../Stores/Api/getQuestions';
import { useEffect } from 'react';
import {QuestionInterface, singleQuestionInterface} from '../Interfaces/questionInterface';
import { ThunkDispatch } from 'redux-thunk';
import {questionActionMarkedAsAsked} from '../Stores/Actions/questionAction';
import {SummaryBeingSaved} from '../Stores/Actions/userSummaryActions';
import {useSelector, useDispatch} from 'react-redux';
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';


interface  MapStateToProps {
    user : UserInterface,
    questions : QuestionInterface,
}

const mapStateToProps = (state : any) : MapStateToProps  =>({
    user: state.userReducer.user,
    questions : state.questionReducer,
  });


interface MapDispatcherToProps {
    saveQuestions : () => void;
}

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, any>) : MapDispatcherToProps =>({
    saveQuestions : () => dispatch(getQuestions())
  });

  
const connector =  connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


const QuestionPage : React.FC<PropsFromRedux> = ({user, questions, saveQuestions})  =>{ 


    useEffect(() =>{
        saveQuestions();
    }, [questions.isDownloaded === false])


    const questionReducerSelector = useSelector((state : any) => state.userSummaryReducer)
    const dispatch = useDispatch()

    const checkUserCondition = () =>{
        if(user.email === '' || user.name === '') return false;
        if(user === null || user === undefined) return false;
        
        return true;
    }

    const returnRouteToQuestion = (questionAnsweredHistory : any) =>{
        return (
            <>
                {<Redirect to={`/question/${Math.floor(Math.random() * 29)}`} />     }
                <Switch>
                    <Route path="/question/:url_id" 
                        children={<Question questions={questions} 
                        questionAnsweredHistory={questionAnsweredHistory} 
                    > </Question>} 
                    />
                </Switch>
            </>  
        );
    }

    var questionAnsweredHistory : any = [];
    const classes = useStyles();    

    return( 
        checkUserCondition()
                ?
        returnRouteToQuestion(questionAnsweredHistory)
                :
         <NoAccess/> 
    
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent : 'flex-start',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        minHeight: '100vh',
    },
    imageStyle : {
        alignSelf : 'flex-start',
        margin : '0px',
        padding : '0px',
        width : '100%',
        height : '500px',
    },
    textColor : {
        color : theme.palette.text.secondary,
    }
  }));


export default connector(QuestionPage);