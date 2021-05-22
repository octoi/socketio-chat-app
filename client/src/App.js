import ChakraWrap from './wrappers/ChakraWrap';
import { Context } from './wrappers/Context';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <ChakraWrap>
            <Context>
                <Router>
                    <Switch>
                        <Route exact path="*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Router>
            </Context>
        </ChakraWrap>
    );
}

export default App;
