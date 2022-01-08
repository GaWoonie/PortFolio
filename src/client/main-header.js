import React, {Component} from "react";
import styled from "styled-components";

const MainHeaderBlock = styled.div`
background: #1864ab;
color: white;
width: 100%;
height: 100px;
h2 {
text-align: left;
position: absolute;
top: 12px;
left: 50px;
}
`;

class MainHeader extends Component{
    render() {
        return(
            <MainHeaderBlock>
            <div>
                <h2>메인 제목</h2>
                <img src="./logo192.png" alt="React" style={{float:"right",width:'70px',position:'absolute',top:'2%',right:'2%'}}/>
            </div>
            </MainHeaderBlock>
        );
    }
}

export default MainHeader;
