import './App.css';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';
import Footer from './Footer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <nav>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О сайте</Link>
          </li>
          <li>
            <Link to="/cat">Категории</Link>
          </li>
        </nav>
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
