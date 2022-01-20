import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import ContactUs from './components/ContactUs/ContactUs'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contactus" component={ContactUs} />
    </Switch>
  );
}

export default App;
