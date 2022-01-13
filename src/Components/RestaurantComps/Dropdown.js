import React, { useState } from "react";
import styled from "styled-components";

export default function Dropdown(props) {

    const { library, selected, setSelected } = props;

    const [isActive, setIsActive] = useState(false)

    const DropdownDiv = styled.div`
        width: 100%;
        margin: 0 auto;
        position: relative;
        user-select: none;
        margin-top: 48px;
    `

    const DropdownButton = styled.div`
        padding: 16px 20px 16px 20px;
        background: ${({ theme }) => theme.colors.bg2};
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border: 1px dashed #DCDCDC;
        height: 48px;
        border-radius: 12px;
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.text3};
    `

    const DropdownContent = styled.div`
        position: absolute;
        padding: 10px;
        top: 110%;
        background: ${({ theme }) => theme.colors.bg2};
        width: 100%;
        height: 200px;
        overflow: hidden;
        overflow-y: scroll;
        border-radius: 12px;
        z-index: 1;
    `

    const DropdownItem = styled.div`
        padding: 10px;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 12px;

        &:hover {
            background: ${({ theme }) => theme.colors.bg3};
        }
    `

    const Number = styled.body`
        background: none;
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: ${({ theme }) => theme.colors.text1};
    `

    const Floor = styled.body`
        background: none;
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 15px;
        color: ${({ theme }) => theme.colors.text2};
        margin-top: 4px;
    `

    const Arrow = styled.img`
    `


    return (


        <DropdownDiv>
            <DropdownButton onClick={(e) => setIsActive(!isActive)}>{selected}
                <Arrow src="../images/Arrow.svg" alt=""></Arrow></DropdownButton>
            {isActive && (
                <DropdownContent>
                    {library.map((library) => (
                        <div key={library.id}>
                            <DropdownItem onClick={(e) => { setSelected(library.number + " - " + library.floor); setIsActive(false) }}>
                                <Number>{library.number}</Number>
                                <Floor>{library.floor}</Floor>
                            </DropdownItem>
                        </div>
                    ))}
                </DropdownContent>
            )}
        </DropdownDiv>



    )
}