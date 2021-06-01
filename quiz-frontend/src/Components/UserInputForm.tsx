import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';


const UserInputForm = () => {

    const classes = useStyles();

    return(
        <div>
            <Formik
                initialValues={{userName: '', userEmail: ''}}
                onSubmit={values => alert(JSON.stringify(values))}
                >
                {
                ({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                    
                    <input
                        className={classes.formInput}
                        placeholder='name'
                        required
                        onChange={handleChange}
                        name="userName"
                        value={values.userName}
                    />

                    <input
                        className={classes.formInput}
                        placeholder='e-mail'
                        required
                        onChange={handleChange}
                        name="userEmail"
                        value={values.userEmail}
                    />

                    <Button className={classes.formButton} variant="contained" color="secondary" type="submit">
                    START THE QUIZ!
                    </Button>

                    </form>
                )
                }
            </Formik>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => createStyles({


    formInput : {
         marginLeft : '25px',
         marginRight : '25px',
         marginTop : '15px',
         marginBottom : '10px',

         display : 'block',
         height : '40px',
         width : '300px',
    },
    formButton : {

        marginLeft : '25px',
        marginTop : '15px',
        marginBottom : '10px',
        marginRight : '25px',
        width : '300px',
        height : '75px',
        borderRadius : '12px',
    }
  }));


export default UserInputForm;