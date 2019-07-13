import React from  'react';
import Header from './components/common/Header';
import List from './components/List/List';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import Detail from './components/Detail/Detail'
const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' component={List} exact  />
                        <Route path='/currency/:id' component={Detail} />
                        <Route component={NotFound}/>

                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;