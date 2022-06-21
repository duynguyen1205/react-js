import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './demo';
import Greeting from './greeting';
import Footer from './greetingFooter';
import MyButton from './button';
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting fullName='Nguyễn Trọng Duy'/>);

root.render(
    <React.Fragment>
        <Greeting fullName="Nguyễn Trọng Duy"/>
        <br/>
        <Greeting fullName="Nguyễn Trọng Nghĩa"/>
        <br/>
        <Greeting/>
        <br/>
        <MyButton/>
        <hr/>
        <Footer copyright = "By Duy" nowdate={Date().toLocaleString()} />
    </React.Fragment>

)

reportWebVitals();
