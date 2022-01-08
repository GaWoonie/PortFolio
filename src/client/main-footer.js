import React, {Component} from "react";
import styled from "styled-components";
import {AiOutlineGithub} from "react-icons/ai"
import {SiBloglovin} from "react-icons/si"
import {GrContact} from "react-icons/gr"

const MainFooterBlock = styled.div`
width: 100%;
height: 100px;
background: #dee2e6;
position: relative;
// position: fixed;
bottom: 0;
text-align: center;
`;

const CopyRightBlock = styled.div`
    // line-height: 3.5;
`;

const FooterIcons = styled.div`
display: flex;
justify-content: center;
padding: 18px 0;
span{
padding: 0px 20px;
}
span :hover {
cursor: pointer;
}
`;
//
// const moveUrl(info) {
//     const url =[
//         {info: 'GitHub',link: 'https://github.com/GaWoonie'},
//         {info: 'Blog', link: 'https://woonie-world.tistory.com/'},
//     ]
//     return window.open(url.link,_blank)
// }

class MainFooter extends Component{
    render() {
        return(
            <MainFooterBlock>
                <FooterIcons>
                    <span onClick={() => window.open('https://github.com/GaWoonie','_blank')}><AiOutlineGithub/></span>
                    <span onClick={() => window.open('https://woonie-world.tistory.com/','_blank')}><SiBloglovin/></span>
                    <span><GrContact/></span>
                </FooterIcons>
                <CopyRightBlock>
                    all rights reserved by © GaWoonie
                </CopyRightBlock>
            </MainFooterBlock>
        );
    }
}

export default MainFooter;
