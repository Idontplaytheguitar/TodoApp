import React from 'react';
import {Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Landing } from './Pages/Landing';



export function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Landing}/>
            <Route exact path="/home" component={Home}/>
            {/* <Route exact path="/todos/:id" component={Todo}/> */}
        </div>
    );
}