import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'



const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/productos" component={Page1} />
            <Route path="/productos/:id" name="productos" component={Page2} />       
        </Switch>
    </BrowserRouter>
)

export default App