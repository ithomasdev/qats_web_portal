import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import "./styles/App.css"

/*
  Fixes:
  Move router to another file,
  implement authentication
*/
function App() {
  return (
    <div className="App">
      <Navigation />
      <Grid container>
        <Grid item sm={1} xs={1}>
          <Sidebar />
        </Grid>
        <Grid item sm={11} xs={11}>
          <Router>
            <Routes>
              <Route path="*" element={<Error/>} />
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;