import React, {Component} from "react";
import './clientCSS/introduce.css'

class Introduce extends Component {
    render() {
        return(
            <div className="introduce-wrap" id="introduce">

                <div className="introduce-title">
                    "<span>항상 발전하는</span>" 신입 개발자 정가운입니다.
                    {/*문구 생각 해야 함*/}
                </div>
                <div className="introduce">
                    <img src="image/introduce.png" alt="정가운" className="image"/>
                    <div className="introduce-contents">
                        <p>이력서 양식 ( 자기소개, 이력사항,비전 등)</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Introduce;