import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Header from "./component/Header";
import Home from "./component/Home"
import UserForm from "./component/UserForm"
import Ballons from "./component/Ballons"

import "./styles/header.css"
import "./styles/userform.css"
import "./styles/ballons.css"
import "./styles/home.css"


function App() {
  return (
    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ballons" element={<Ballons/>}/>      
        <Route path="/user-form" element={<UserForm />}/>     
      </Routes>


    </Router>
  );
}

export default App;
