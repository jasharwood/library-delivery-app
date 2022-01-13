import React from "react";
import styled from "styled-components";

function OrdersHeader() {

    const HeaderContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 11px;
    `

    const StyledHeader = styled.header`
        padding: 0;
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 22px;
        letter-spacing: 0.16em;
        color: ${({ theme }) => theme.colors.text1};
    `;


    return (
        <HeaderContainer>
            <StyledHeader>
                ORDERS
            </StyledHeader>
        </HeaderContainer>
    )
}

export default OrdersHeader;