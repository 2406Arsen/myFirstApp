import React from  'react';
import Header from './components/common/Header';
import List from './components/List/List';
import ComponentLife from './components/LiveCycle/ComponentLife'


const App = () => {
    return(
        <div>
           <Header /> 
            <List />
            <ComponentLife />
        </div>
    )
}

export default App;