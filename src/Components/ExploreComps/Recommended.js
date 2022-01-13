import React from "react";
import styled from "styled-components";
import Restaurant2 from "./Restaurant2";

export default function Recommended (props) {

    const {recommended} = props;

    const RecommendedContainer = styled.div`
        margin-top: 55px;
        width: 100%;
        height: 560px;
    `

    const RecommendedHeading = styled.h2`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 22px;
        letter-spacing: 0.16em;
        color: ${({ theme }) => theme.colors.text1};
        margin-bottom: 24px;
    `

    const RecommendedWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        row-gap: 32px;
    `


    return (
        <RecommendedContainer>
            <RecommendedHeading>RECOMMENDED</RecommendedHeading>
            <RecommendedWrapper>
                {recommended.map((recommended) => (
                    <Restaurant2 key={recommended.id} recommended={recommended}></Restaurant2>
                ))}
            </RecommendedWrapper>
        </RecommendedContainer>
    )
};