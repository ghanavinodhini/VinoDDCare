import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';

import WelcomePg from './welcome/WelcomePg';
import Toolbar from './toolbar/Toolbar';
import ViewList from './viewlist/ViewList';
import CustList from './custlist/CustList';
import FooterPg from './footer/FooterPg';

function App() {
  return (
    
     <Router>
       <div className="App">
       <Toolbar/>
          <Switch>         
            <Route path ="/CustList" component={CustList}/>
            <Route path ="/ViewList" component={ViewList}/>      
            <Route path ="/" component={WelcomePg}/>
          </Switch>
          <FooterPg/>
      </div>
      
     </Router>
    
  );
}

export default App;
