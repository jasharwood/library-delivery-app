import React from "react";
import styled from "styled-components";
import Restaurant from "./Restaurant";

export default function PopularRestaraunts(props) {

    const { restaurant } = props;

    const PopularContainer = styled.div`
        margin-top: 55px;
        width: 100%;
        height: 283px;
    `

    const PopularHeading = styled.h2`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 22px;
        letter-spacing: 0.16em;
        color: ${({ theme }) => theme.colors.text1};
        margin-bottom: 24px;
    `

    const PopularWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 32px;
        margin: 0;
        padding: 0;
    `


    return (
        <PopularContainer>
            <PopularHeading>POPULAR</PopularHeading>
            <PopularWrapper>
                {restaurant.map((restaurant) => (
                        <Restaurant key={restaurant.id} restaurant={restaurant}></Restaurant>
                    ))} 
            </PopularWrapper>
        </PopularContainer>
    )
};