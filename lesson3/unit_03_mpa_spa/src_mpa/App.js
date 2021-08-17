import './App.css';
import Header from './Header';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';
import About from './About';
import Home from './Home';
import Footer from './Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/cat" component={Category} />
          <Route path="/cat/:categoryName" component={CategoryDescription} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
