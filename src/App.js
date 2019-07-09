import React from  'react';
import Header from './components/common/Header';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

import ComponentLife from './components/LiveCycle/ComponentLife'

import {Route,BrowserRouter,Switch} from 'react-router-dom'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Header />
                <NavBar />
                <Switch>
                    <Route path='/about' component = {About}/>
                    <Route path='/list' component = {List}/>
                    <Route path='/home' component = {Home} />
                    <Route component = {NotFound} />
                </Switch>
            
            </BrowserRouter>      
          {/* <ComponentLife /> */}
        </div>
    )
}

export default App;