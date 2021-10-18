import { BrowserRouter as Router,
  Switch,
  Route,
  NavLink} from "react-router-dom";
import Home from './components/Home'
import About from "./components/About";
import './App.css'

function App() {
  return (
    <Router>
      <header>
        <nav
          style={{
            padding: "iem",
            backgroundColor: "darksalmon",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/about">About</NavLink>
          <NavLink exact to="/contact">Contact</NavLink>
        </nav>
      </header>
      <Switch>
        <Route path='/contact'>
        <h1>Contact Us</h1>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
        <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
