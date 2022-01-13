import React, {useRef, useEffect, useCallback} from "react";
import styled from "styled-components";

export const Modal = ({showModal, setShowModal}) => {

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
        height: 504px;
        width: 480px;
        border-radius: 16px;
        box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14);
        background: ${({theme}) => theme.colors.bg3};
        position: relative;
        z-index: 10;
    `

    const ModalImg = styled.img`
        border-radius: 16px 16px 0 0;
        height: 230px;
        width: 480px;
    `

    const ModalContent = styled.div`
        display: flex;
        flex-direction: column;
        margin: 12px 32px 24px 32px;
    `

    const TitlePrice = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `

    const Title = styled.h1`
        font-family: ${({theme}) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        color: ${({ theme }) => theme.colors.text1};
    `

    const Price = styled.h1`
        font-family: ${({theme}) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: ${({ theme }) => theme.colors.text1};
    `

    const Desc = styled.body`
        font-family: ${({theme}) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        color: ${({ theme }) => theme.colors.text2};
    `

    const AllergenContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 16px;
    `

    const AllergenIcon = styled.img`
        margin-right: 4px;
    `

    const AllergenDesc = styled.body`
        font-family: ${({theme}) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 14px;
        color: ${({ theme }) => theme.colors.text2};
    `

    const Button = styled.button`
        background: ${({ theme }) => theme.colors.red};
        backdrop-filter: blur(8px);
        border-radius: 14px;
        margin-top: 36px;
        height: 48px;
        border: none;
        color: white;
        font-family: ${({theme}) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;

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
    `


    return (
        <>
        {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src='../../images/modal.png' alt='Burger'/>
                    <ModalContent>
                        <TitlePrice>
                            <Title>The Dirty Vegan</Title>
                            <Price>£10.95</Price>
                        </TitlePrice>
                        <Desc>Beyond meat vegan burger patty topped with; applewood smoked cheese, lettuce, tomato, onion and gherkins in a vegan brioche style bun.</Desc>
                        <AllergenContainer>
                            <AllergenIcon src='../../images/DangerCircle.svg' alt='' />
                            <AllergenDesc>Contains gluten</AllergenDesc>
                        </AllergenContainer>
                        <Button>Add to Basket</Button>
                    </ModalContent>
                    <CloseModalButton src='../../images/MdClose.svg' alt='' aria-label='Close modal' onClick={() => setShowModal (prev => !prev)} />
                </ModalWrapper>
            </Background>
        ) : null } 
        </>
    )

};

export default Modal;