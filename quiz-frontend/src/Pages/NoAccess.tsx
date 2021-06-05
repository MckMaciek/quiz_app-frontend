import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const NoAccess = () =>{

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <p className={classes.textColor} > You cannot reach this site </p>
            <Button 
            className={classes.retButton}
            variant="contained" 
            color="secondary" 
            type="submit"
            component={ Link } to="/form"
            >   
            ENTER VALID DATA!
            </Button>
        </div>

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
    retButton : {
        marginTop : '15px',
        width : '50%',
    },

}));


export default NoAccess;