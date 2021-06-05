import {BrowserRouter as Router} from 'react-router-dom';
import IndexPage from '../Pages/IndexPage';
import FormPage from '../Pages/FormPage';
import SummaryPage from '../Pages/SummaryPage';
import QuestionPage from '../Pages/QuestionPage';
import {
    Route,
    Switch
  } from 'react-router-dom';



const AppRouter = () =>{
    return(
        <Router>
            <Switch>
                    <Route exact path='/'>
                        <IndexPage/>
                    </Route>

                    <Route path='/form'> 
                       <FormPage/>
                    </Route>

                    <Route path='/question'>
                        <QuestionPage/>
                    </Route>
                    <Route path='/summary'>
                        <SummaryPage/>
                    </Route>

            </Switch>
        </Router>
    );
}

export default AppRouter;