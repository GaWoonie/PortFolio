import React, {Component} from "react";
import styled from "styled-components";
import {AiOutlineGithub} from "react-icons/ai"
import {SiBloglovin} from "react-icons/si"
import {GrContact} from "react-icons/gr"

const MainFooterBlock = styled.div`
width: 100%;
height: 100px;
background: #dee2e6;
position: absolute;
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
`;


class MainFooter extends Component{
    render() {
        return(
            <MainFooterBlock>
                <FooterIcons>
                    <span><AiOutlineGithub/></span>
                    <span><SiBloglovin/></span>
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
