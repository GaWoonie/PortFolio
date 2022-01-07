import React, {Component} from "react";
import './clientCSS/introduce.css'
class Introduce extends Component {
    render() {
        return(
            <div className="introduce-wrap" id="introduce">
                <div>
                    안녕하세요. ~하는 신입 개발자 정가운입니다.
                </div>
                <div>
                    사진 첨부
                </div>
                <div>
                    이력서 양식 ( 자기소개, 이력사항 등)
                </div>

            </div>
        );
    }
}

export default Introduce;