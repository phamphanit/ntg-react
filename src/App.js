import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './partials/Header';
import HomePage from './screens/Homepage';
import Contact from './screens/Contact';
import PostPage from './screens/Postpage';
import Footer from './partials/Footer';
import Blog from './screens/Blog';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/post' component={PostPage} />
        <Route exact path='/blog' component={Blog} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
