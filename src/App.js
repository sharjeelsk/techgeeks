import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
}

export default App;
