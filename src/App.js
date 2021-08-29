import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Employee from './component/employee';
import Apply from "./component/apply";
import LeaveHistory from "./component/leaveHistory";
import Header from "./component/header";
import Footer from './component/footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Route path="/" exact={true} component={Employee} />
    <Route path="/apply" exact={true} component={Apply} />
    <Route path="/leave-history" exact={true} component={LeaveHistory} />
<Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
