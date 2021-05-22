import ChakraWrap from './wrappers/ChakraWrap';
import Home from './pages/home';
import Chat from './pages/chat';
import Header from './components/header/Header';
import { Context } from './wrappers/Context';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <ChakraWrap>
            <Context>
                <Router>
                    <Switch>
                        <Header />
                        <Route exact path="/"><Home /></Route>
                        <Route exact path="/chat/:roomid"><Chat /></Route>
                        <Route exact path="*"><Redirect to="/" /></Route>
                    </Switch>
                </Router>
            </Context>
        </ChakraWrap>
    );
}

export default App;
