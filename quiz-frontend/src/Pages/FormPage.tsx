import { createStyles, makeStyles, Theme } from '@material-ui/core';
import FormHeader from '../Components/FormHeader';
import UserInputForm from '../Components/UserInputForm';
import {UserInterface} from '../Interfaces/userInterface';
import {userSave} from '../Stores/Api/userSave';
import { connect, ConnectedProps  } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



interface MapDispatcherToProps {
    saveUserNameAndEmail : (user : UserInterface) => void;
}

interface  MapStateToProps {
    user : UserInterface
}

const mapStateToProps = (state : any) : MapStateToProps  =>({
    user: state.userReducer.user,
  });
  

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, any>) : MapDispatcherToProps =>({
    saveUserNameAndEmail : (user : UserInterface) => dispatch(userSave(user))
  });

const connector =  connect(mapStateToProps,mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


const FormPage : React.FC<PropsFromRedux> = ({saveUserNameAndEmail, user}) =>{
    
    const classes = useStyles();

    const saveUser = (user : UserInterface) =>{
        saveUserNameAndEmail(user);
    }


    return(
        <>
        <div className={classes.root}>
                <FormHeader/>
            <div className={classes.form_container}>
                <UserInputForm saveUser={(user : UserInterface) => saveUser(user)}></UserInputForm>
            </div>

            <Button 
            variant="contained" 
            className={classes.retButton}
            component={ Link } to="/"
            >
                BACK
            </Button>
        </div>
        </>
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    root : {
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
        background : theme.palette.background.paper,
        minHeight: '100vh',
    },
    form_container : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        minHeight: '35vh',
        minWidth: '30vw',
        border: '5px solid white',
        borderRadius : '12px',
    },
    retButton : {
        marginTop : '20px',
    }

  }));


export default connector(FormPage);