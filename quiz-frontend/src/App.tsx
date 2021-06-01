import Theming from "./Styles/theme";
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Stores/Reducers/rootReducer'
import thunk from 'redux-thunk';

function App() {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Theming/>
  );
}

export default App;
