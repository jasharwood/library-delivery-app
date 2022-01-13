import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from '../../data';
import Dropdown from './Dropdown';
import { OrderSuccessModal } from "./OrderSuccessModal";

export default function Main(props) {

    const {library} = data;

    const [selected, setSelected] = useState("Select your library seat");

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 20 ? 0 : 1.49;
    const totalPrice = itemsPrice + shippingPrice;

    const BasketContainer = styled.aside`
        background: ${({ theme }) => theme.colors.bg3};
        box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);
        width: 414px;
        left: 1026px;
        top: 2px;
        border-radius: 0px;
        overflow: hidden;
        overflow-y: scroll;
    `

    const BasketHeading = styled.h1`
        text-align: center;
        margin-top: 48px;
        font-family: BlissLight;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 22px;
        letter-spacing: 0.16em;
        color: ${({ theme }) => theme.colors.text1};
    `

    const InnerBasketContainer = styled.div`
        margin: 40px;
        height: 100%;
    `

    const EmptyMessage = styled.body`
        text-align: center;
        margin-top: 48px;
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.text2};
    `

    const AddButton = styled.button`
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.bg2};
        border: none;
        display: flex;
        justify-content: center;
        padding: 8px;
        cursor: pointer;
    `

    const RemoveButton = styled.button`
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.bg2};
        display: flex;
        justify-content: center;
        border: none;
        padding: 8px;
        cursor: pointer;
    `

    const ItemContainer = styled.div`
        border-radius: 12px;
        background: ${({ theme }) => theme.colors.bg3};
        box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
        padding: 12px 20px 12px 12px;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    `

    const NamePrice = styled.div`
        display: flex;
        justify-content: space-between;
        width: 211px;
        align-items: center;
        margin-top: 4px;
    `

    const Name = styled.body`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.text1};
    `

    const Price = styled.body`
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        color: ${({ theme }) => theme.colors.text1};
    `

    const Quantity = styled.body`
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: ${({ theme }) => theme.colors.text1};
        background: none;
    `

    const ButtonDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${({ theme }) => theme.colors.bg2};
        border-radius: 8px;
        margin-top: 12px;
        margin-right: 0px;
        width: 84px;
        padding: 0;
    `

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 16px;
    `

    const Row = styled.div`
        display: flex;
        flex-direction: row;
    `

    const SubtotalDiv = styled.div`
        display: flex;
        justify-content: space-between;
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.text3};
        margin-bottom: 14px;
    `

    const DeliveryFeeDiv = styled.div`
        display: flex;
        justify-content: space-between;
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.text3};
        margin-bottom: 20px;
    `

    const OrderTotalDiv = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 22px;
    `

    const Line = styled.hr`
        border-top: 1px solid #DCDCDC;
    `

    const OrderTotal = styled.body`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.text1};
    `

    const OrderTotalPrice = styled.body`
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        text-align: right;
        color: ${({ theme }) => theme.colors.text1};
    `

    const CartSummary = styled.div`
        margin-top: 36px;
    `

    const ItemsandSummary = styled.div`
        height: 100%;
    `

    const OrderButton = styled.button`
        background: ${({ theme }) => theme.colors.red};
        backdrop-filter: blur(8px);
        border-radius: 14px;
        margin-top: 28px;
        margin-bottom: 40px;
        height: 48px;
        border: none;
        color: ${({ theme }) => theme.colors.bg3};
        font-family: ${({ theme }) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        width: 100%;
        cursor: pointer;
    `

    const LinkStyle = {
        textDecoration: "none",
        color: 'white'
    };



    return (
        <BasketContainer>
            <BasketHeading>YOUR CART</BasketHeading>
            <InnerBasketContainer>
                <div>
                    {cartItems.length === 0 && <EmptyMessage>Your cart is empty at the moment!</EmptyMessage>}
                </div>
                <ItemsandSummary>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <ItemContainer>
                                <Row>
                                    <div>
                                        <img src={item.image} alt={item.alt} />
                                    </div>
                                    <Column>
                                        <NamePrice>
                                            <Name>{item.name}</Name>
                                            <Price>£{item.price.toFixed(2)}</Price>
                                        </NamePrice>
                                        <ButtonDiv>
                                            <RemoveButton onClick={() => onRemove(item)}>
                                                <img src='../../images/minus.svg' alt='' />
                                            </RemoveButton>
                                            <Quantity>{item.qty}</Quantity>
                                            <AddButton onClick={() => onAdd(item)}>
                                                <img src='../../images/plus.svg' alt='' />
                                            </AddButton>
                                        </ButtonDiv>
                                    </Column>
                                </Row>
                            </ItemContainer>
                        </div>
                    ))}

                    {cartItems.length !== 0 && (
                        <>
                        <div>
                            <Dropdown library={library} selected={selected} setSelected={setSelected}></Dropdown>
                        </div>
                        <CartSummary>
                            <SubtotalDiv>
                                <div>Subtotal</div>
                                <div>£{itemsPrice.toFixed(2)}</div>
                            </SubtotalDiv>
                            <DeliveryFeeDiv>
                                <div>Delivery fee</div>
                                <div>£{shippingPrice.toFixed(2)}</div>
                            </DeliveryFeeDiv>
                            <Line></Line>
                            <OrderTotalDiv>
                                <OrderTotal>Order Total</OrderTotal>
                                <OrderTotalPrice>£{totalPrice.toFixed(2)}</OrderTotalPrice>
                            </OrderTotalDiv>

                            <OrderButton onClick={openModal} style={LinkStyle}>Place Order</OrderButton>
                            <OrderSuccessModal showModal={showModal} setShowModal={setShowModal}></OrderSuccessModal>
                        </CartSummary>
                        </>
                    )}
                </ItemsandSummary>
            </InnerBasketContainer>
        </BasketContainer>
    )
}