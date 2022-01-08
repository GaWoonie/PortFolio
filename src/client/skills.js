import React, {Component} from "react";
import './clientCSS/skills.css'

class Skills extends Component{
    render() {
        return(
            <div className="skill-wrap">
                <h1>Ability</h1>
                <div className="progress">
                    <h2>HTML</h2>
                    <progress className="progressTag" value="75" max="100"/>
                    <span>75%</span>
                </div>
                <div className="progress">
                    <h2>CSS</h2>
                    <progress className="progressTag" value="75" max="100"></progress>
                    <span>75%</span>
                </div>
                <div className="progress">
                    <h2>JavaScript, JQuery</h2>
                    <progress className="progressTag" value="70" max="100"></progress>
                    <span>70%</span>
                </div>
                <div className="progress">
                    <h2>Java</h2>
                    <progress className="progressTag" value="50" max="100"></progress>
                    <span>50%</span>
                </div>
                <div className="progress">
                    <h2>Angular</h2>
                    <progress className="progressTag" value="80" max="100"></progress>
                    <span>80%</span>
                </div>
                <div className="progress">
                    <h2>React</h2>
                    <progress className="progressTag" value="70" max="100"></progress>
                    <span>70%</span>
                </div>
                <div className="progress">
                    <h2>Spring</h2>
                    <progress className="progressTag" value="50" max="100"></progress>
                    <span>50%</span>
                </div>
            </div>
        );
    }
}

export default Skills;