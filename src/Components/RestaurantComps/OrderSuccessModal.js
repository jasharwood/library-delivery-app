import React, { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const OrderSuccessModal = ({ showModal, setShowModal }) => {

    const modalRef = useRef ()

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

        const Background = styled.div`
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        z-index: 1;
        `

    const ModalWrapper = styled.div`
        height: 301px;
        width: 404px;
        border-radius: 16px;
        box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14);
        background: ${({theme}) => theme.colors.bg3};
        position: relative;
        z-index: 10;
        padding-top: 52px;
    `

    const ModalImg = styled.img`
    `

    const ModalContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 24px;
    `

    const Title = styled.h1`
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        color: ${({ theme }) => theme.colors.text1};
        text-align: center;
    `

    const Desc = styled.body`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        color: ${({ theme }) => theme.colors.text2};
        text-align: center;
    `

    const Button = styled.button`
        background: ${({ theme }) => theme.colors.red};
        backdrop-filter: blur(8px);
        border-radius: 14px;
        margin-top: 36px;
        height: 48px;
        border: none;
        color: white;
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        width: 100%;
    `

    const CloseModalButton = styled.img`
        cursor: pointer;
        position: absolute;
        top: 16px;
        right: 16px;
        width: 36px;
        height: 36px;
        padding: 0;
        z-index: 100;
        margin-bottom: 20px;
    `

    const LinkStyle = {
        textDecoration: "none",
        color: 'white'
    };




    return (
        <>
            {showModal ?
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                            <ModalImg src='../../images/check.svg' alt='Tick' />
                                <Title>Success!</Title>
                                <Desc>Your order has been placed. You will receive a notification when your order has been accepted by the restaurant.</Desc>
                            <Button><Link to='/orders' style={LinkStyle}>View my orders</Link></Button>
                        </ModalContent>
                        <CloseModalButton src='../../images/MdClose.svg' alt='' aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>
                </Background>

                : null}
        </>
    )
}