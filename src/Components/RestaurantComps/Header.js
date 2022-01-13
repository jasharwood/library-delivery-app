import React from "react";
import styled from "styled-components";
import pattyshack from "../../assets/images/PattyShackHeader.png";

function Header() {

    const ImgContainer = styled.div`
        height: 230px;
        width: 838px;
        left: 148px;
        top: 40px;
        border-radius: [object Object]px;
        border-radius: 16px 16px 0px 0px;
    `

    const HeaderImg = styled.img`
    `

    const InnerContainer = styled.div`
        margin: 36px 40px;
    `

    const Title = styled.h1`
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 44px;
        color: ${({ theme }) => theme.colors.text1};
    `

    const DetailsContainer = styled.div`
        display: flex;
        flex-direction: row;
    `

    const LocationContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 36px;
    `

    const LocationIcon = styled.img`
        margin-right: 8px;
    `
    const LocationDetails = styled.body`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.text2};
    `

    const TimeContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
    `

    const TimeIcon = styled.img`
        margin-right: 8px;
    `
    const TimeDetails = styled.body`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.text2};
    `

    const BurgersContainer = styled.div`
        background: #fff;
        margin-top: 50px;
    `

    const BurgersHeading = styled.h2`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: 0.16em;
        color: ${({ theme }) => theme.colors.text1};
        margin-bottom: 24px;
    `

    const BurgersWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    `

    const ItemCard = styled.div`
        width: 364px;
    `

    const ItemInfo = styled.img`
        margin: 16px 20px 16px 16px;
    `

    const ItemImg = styled.img`
        border-radius: 8px;
        margin-bottom: 14px;
    `

    const ItemTitle = styled.h3`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        
        color: ${({ theme }) => theme.colors.text1};
    `

    const ItemDesc = styled.body`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        color: ${({ theme }) => theme.colors.text2};    
    `

    const ItemPrice = styled.body`
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        /* identical to box height, or 139% */
        color: ${({ theme }) => theme.colors.text1};
    `



    return (
            <>
            <HeaderImg src={pattyshack} alt='Patty Shack Burgers' />
            <InnerContainer>
                <Title>Patty Shack</Title>
                <DetailsContainer>
                    <LocationContainer>
                        <LocationIcon src='./images/Location.svg' alt='' />
                        <LocationDetails>0.1 miles away | Michael Andrews Building</LocationDetails>
                    </LocationContainer>
                    <TimeContainer>
                        <TimeIcon src='./images/TimeCircle.svg' alt='' />
                        <TimeDetails>15 - 20 mins | £1.49 delivery fee</TimeDetails>
                    </TimeContainer>
                </DetailsContainer>
            </InnerContainer>
            </>
    )
}

export default Header;