import React, {Component} from "react";
import './clientCSS/project.css'


class Project extends Component {
    render() {
        return(
            <>
            <h1>Project</h1>
            <div className="project-wrap">
                <div className="project">
                    <p>프로젝트 img</p>
                    <p> 프로젝트 이름</p>
                    <p>프로젝트 설명 클릭하면 모달로 나오도록 설정</p>
                    <p>모달 안에, 깃 주소, 프로젝트 이미지, 설명 추가</p>
                </div>
                <div className="project">
                    <p>프로젝트 img</p>
                    <p> 프로젝트 이름</p>
                    <p>프로젝트 설명 클릭하면 모달로 나오도록 설정</p>
                </div>
                <div className="project">
                    <p>프로젝트 img</p>
                    <p> 프로젝트 이름</p>
                    <p>프로젝트 설명 클릭하면 모달로 나오도록 설정</p>
                </div>
            </div>
            </>
        );
    }
}

export default Project;