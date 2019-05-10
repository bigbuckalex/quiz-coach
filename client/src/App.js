import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import Stats from './pages/Stats';

function App() {
    return (
        <div className='App'>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/quiz' component={Quiz}/>
            <Route exact path='/stats' component={Stats}/>
        </div>
    );
}

export default App;
