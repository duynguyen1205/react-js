import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
class MyNav extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Aboutus">About us</Link>
                        </li>
                    </ul>
                    <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/Aboutus" element={<Aboutus/>}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}
export default MyNav;