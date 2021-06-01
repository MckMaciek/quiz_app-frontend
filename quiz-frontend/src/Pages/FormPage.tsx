import { Backdrop, createStyles, makeStyles, Theme } from '@material-ui/core';
import FormHeader from '../Layouts/FormHeader';
import UserInputForm from '../Components/UserInputForm';


const FormPage = () =>{
    
    const classes = useStyles();
    
    return(
       <div className={classes.root}>
            <FormHeader/>
           <div className={classes.form_container}>
            <UserInputForm></UserInputForm>
           </div>
       </div>
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

  }));


export default FormPage;