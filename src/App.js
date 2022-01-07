import './App.css';
import {Component} from "react";
import MainHeader from "./client/main-header";
import MainFooter from "./client/main-footer";
import Project from "./client/project";
import Introduce from "./client/introduce";
import Skills from "./client/skills";
import {BsFillArrowUpSquareFill} from "react-icons/bs"

const scrollToTop = () => {
    // 일정분량만큼 내려갔을때 scroll버튼이 보이도록 하는 로직을 추가하면 될 듯
    document.documentElement.scrollTop = 0;
    console.log("scroll");
}

class App extends Component {

    render() {
        return (
            <>
            <MainHeader/>
                <Introduce/>
                <Skills/>
                <Project/>
            <MainFooter/>
                 <div className="pageUP" onClick={scrollToTop}><BsFillArrowUpSquareFill size="30"/></div>
            </>
        );
    }

}

export default App;
