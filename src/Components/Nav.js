import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {

    const NavBar = styled.nav`
        background: ${({ theme }) => theme.colors.bg3};
        box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
        width: 108px;
        left: 0px;
        top: 0px;
        border-radius: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px 20px 0 20px;
    `;

    const Logo = styled.img`
        margin-bottom: 46px;
        max-width: 68px;
    `;

    const Icons = styled.div`
        height: 180px;
        width: 48px;
        left: 30px;
        top: 113px;
        border-radius: [object Object]px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    `

    const IconContainer = styled.div`
        background-color: ${({ theme }) => theme.colors.bg3};
        height: 48px;
        width: 48px;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
            background-color: ${({ theme }) => theme.colors.lightred};
        }
    `

    const Home = styled.img`
    `;

    const Ticket = styled.img`
    `;

    const Notification = styled.img`
    `;

    return (
        <NavBar>
            <Logo src='./images/logo.png' alt=''/>
            <Icons>
                <IconContainer>
                    <Link to='/Explore'>
                        <Home src='./images/Homebold.svg' alt=''/>
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to="/Orders">
                        <Ticket src='./images/Ticket.svg' alt='' />
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Notification src='./images/Notification.svg' alt=''/> 
                </IconContainer>
            </Icons>
        </NavBar>
    )
}

export default Nav;