
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import eruda from "eruda";
import HomePage from "./components/pages/HomePage/HomePage.js";
import Courses from "./components/pages/Courses/Courses.js";
import Services from "./components/pages/Services/Services.js";
import Footer from "./components/pages/Footer/Footer.js";
function App() {
	
 //eruda.init();
  return (
    <Router>
	<Navbar/>
	<Switch>
	  <Route exact path="/">
		  <HomePage/>
	</Route>
	  <Route path="/Courses">

		<Courses/>
	  </Route>
	  <Route path="/Services">

		<Services/>
	  </Route>
	</Switch>
	  <Footer/>
    </Router>
  );
}

export default App;
