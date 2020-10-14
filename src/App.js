import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'



const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/productos" component={Page1} />
            
            <Route path="/productos/:id" name="productos" component={Page2} /> 
            <Route component={Page1}>
                <Redirect to = "/productos"></Redirect>
            </Route>      
        </Switch>
    </BrowserRouter>
)

export default App