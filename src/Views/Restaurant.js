import React from "react";
import styled from "styled-components";
import Header from '../Components/RestaurantComps/Header';
import Main from '../Components/RestaurantComps/Main';
import Basket from '../Components/RestaurantComps/Basket';
import data from '../data';
import { useState } from "react";



function Restaurant() {

    const { products } = data;

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
        } else {
            setCartItems([ ...cartItems, { ...product, qty: 1}]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        }
        else {
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
        );
        }
    }

    const RestaurantDiv = styled.div`
        display: flex;
    `
    const Container = styled.div`
        background: ${({ theme }) => theme.colors.bg3};
        height: 860px;
        width: 838px;
        border-radius: [object Object]px;
        box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
        border-radius: 16px;
        margin: 40px;
        overflow: auto;
        ::-webkit-scrollbar { 
            display: none; 
        }
    `


    return (
        <RestaurantDiv>
            <Container>
                <Header></Header>
                <Main onAdd={onAdd} products={products}></Main>
            </Container>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        </RestaurantDiv>
    )
}

export default Restaurant;