import ChakraWrap from './wrappers/ChakraWrap';
import Home from './pages/home';
import Chat from './pages/chat';
import Header from './components/header/Header';
import Form from './pages/form';
import AuthProtected from './wrappers/AuthProtected';
import { Context } from './wrappers/Context';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <ChakraWrap>
            <Context>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <AuthProtected><Home /></AuthProtected>
                        </Route>
                        <Route exact path="/form"><Form /></Route>
                        <Route exact path="/chat/:roomid">
                            <AuthProtected><Chat /></AuthProtected>
                        </Route>
                        <Route exact path="*">
                            <AuthProtected><Redirect to="/" /></AuthProtected>
                        </Route>
                    </Switch>
                </Router>
            </Context>
        </ChakraWrap>
    );
}

export default App;
