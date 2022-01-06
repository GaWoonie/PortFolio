import './App.css';
import {Component} from "react";
import MainHeader from "./client/main-header";
import MainFooter from "./client/main-footer";
import {BsFillArrowUpSquareFill} from "react-icons/bs"

class App extends Component {
    render() {
        return (
            <>
            <MainHeader/>
            <MainFooter/>
                <div className="pageUP"><BsFillArrowUpSquareFill size="30"/></div>
            </>
        );
    }

}

export default App;
