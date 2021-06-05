import {UserInterface} from '../Interfaces/userInterface';
import userSummary from '../Interfaces/userSummaryInterface';
import { ThunkDispatch } from 'redux-thunk';
import { connect, ConnectedProps  } from 'react-redux';
import {useEffect} from 'react';
import NoAccess from './NoAccess';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


interface  MapStateToProps {
    user : UserInterface,
    userSummary : any,
}

const mapStateToProps = (state : any) : MapStateToProps  =>({
    user: state.userReducer.user,
    userSummary : state.userSummaryReducer.result,
  });

interface MapDispatcherToProps {
}

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, any>) : MapDispatcherToProps =>({
});

const connector =  connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Summary : React.FC<PropsFromRedux>= ({user, userSummary}) =>{

    useEffect(()=>{
        console.log(userSummary);
    },[])

    const classess = useStyles();
    let history = useHistory();

    const getNumbers = () =>{
        let numOfPointsScored : number = 0;
        
        userSummary.forEach((userQuestion : any) =>{
            if(userQuestion.wasCorrect === true) numOfPointsScored += 1;
        })
        return numOfPointsScored;
    }

    const listWrongAnswers = () =>{

        return userSummary.map((userAnswerAndQuestion : any) =>{
            if(userAnswerAndQuestion.wasCorrect === false){
                return(
                    <p> Wrong answer :  {userAnswerAndQuestion .question}</p>
                );
            } 
        })
    }

    const checkAccess = () =>{

        console.log(user.name, user.email, userSummary.length)
        if(user.name === '' || user.email === '' || userSummary.length !== 8 ){
        return(<NoAccess></NoAccess>)
        }
        else{
            return(
                <>
                    <div className={classess.root} >
                        <div className={classess.summary_screen}>
                            <p className={classess.textColor}> You scored {getNumbers()} answers!</p>

                            <div className={classess.wrongAnswers}>
                                {listWrongAnswers()}
                            </div>

                            <Button 
                            className={classess.retButton}
                            variant="contained" 
                            color="secondary" 
                            type="submit"
                            component={ Link } to="/"
                            >   
                            TRY AGAIN!
                            </Button>
                        </div>
                    </div>
                </> 
            );
        }
        
    }

    return(
        <>
            {checkAccess()}
        </>
    );
};

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
    summary_screen : {
        height : '500px',
        width : '40%',
        background : theme.palette.background.paper,
        border : '5px solid white',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'column',
    },
    retButton : {
    },
    wrongAnswers : {
        color : theme.palette.text.secondary, 
        justifyContent : 'flex-start',
    }

  }));


export default connector(Summary);