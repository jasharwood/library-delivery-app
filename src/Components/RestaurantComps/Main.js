import React from "react";
import styled from "styled-components";
import Product from "./Product";

export default function Main(props) {

    const { products, onAdd } = props;

    const MainContainer = styled.div`
        margin-top: 55px;
        margin-bottom: 16px;
        margin-left: 40px;
        background: ${({ theme }) => theme.colors.bg3};
        width: 758px;
    `

    const Heading = styled.h1`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 22px;
        letter-spacing: 0.16em;
        color: ${({ theme }) => theme.colors.text1};
        margin-bottom: 24px;
    `

    const ProductsWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        justify-content: space-between;
    `

    return (
        <MainContainer>
            <Heading>OUR PRODUCTS</Heading>
            <ProductsWrapper>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </ProductsWrapper>
        </MainContainer>
    )
}