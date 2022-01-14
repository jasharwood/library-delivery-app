import React from "react";
import styled from "styled-components";

function Header() {

    const HeaderContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
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

    const SearchContainer = styled.div`
        width: 383px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const SearchBar = styled.div`
        background: ${({ theme }) => theme.colors.bg2};
        backdrop-filter: blur(8px);
        height: 44px;
        width: 323px;
        border-radius: 14px;
        border: none;
        display: flex;
        padding: 8px 12px;
        min-width: 100px;
    `

    const SearchIcon = styled.img`
        padding: 4px;
        margin-right: 8px;
    `

    const SearchInput = styled.input`
        border: none;
        border-radius: 0;
        width: 100%;
        padding: 0;
        outline: 0;
        background-color: ${({ theme }) => theme.colors.bg2};
        font-family: ${({ theme }) => theme.typography.font1.fontFamily}
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.text1};

        ::placeholder {
            color: ${({ theme }) => theme.colors.text3};

        }

    `

    const FilterButton = styled.button`
        border: none;
        height: 44px;
        width: 44px;
        background: #FE0000;
        backdrop-filter: blur(8px);
        border-radius: 14px;
    `

    const FilterIcon = styled.img``

    return (
        <HeaderContainer>
            <StyledHeader>
                EXPLORE
            </StyledHeader>
            <SearchContainer>
                <SearchBar>
                    <SearchIcon src='./images/search.svg' alt=''/>
                    <SearchInput placeholder="Search" type="text"></SearchInput>
                </SearchBar>
                <FilterButton>
                    <FilterIcon src='./images/Filter.svg' alt=''/>
                </FilterButton>
            </SearchContainer>
        </HeaderContainer>
    )
}

export default Header;