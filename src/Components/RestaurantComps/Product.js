import React from "react";
import styled from "styled-components";

export default function Product(props) {
    const {product, onAdd} = props;

    const ProductCard = styled.div`
        width: 364px;
        background: ${({ theme }) => theme.colors.bg3};
        box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
        border-radius: 12px;
        margin-bottom: 32px;
    `

    const ProductInfo = styled.div`
        margin: 16px 20px 16px 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
    `

    const Image = styled.img`
        border-radius: 8px;
        margin-right: 16px;
    `

    const ProductInfo2 = styled.div`
        margin: 0;
    `

    const TitlePrice = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 244px;
    `

    const Name = styled.h2`
        font-family: ${({theme}) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        color: ${({theme}) => theme.colors.text1};
        margin-bottom: 0 0 8px 0;
        cursor: pointer;
    `

    const Desc = styled.body`
        width: 200px;
        font-family: ${({theme}) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        color: ${({theme}) => theme.colors.text2};
    `

    const Price = styled.body`
        font-family: ${({theme}) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        margin: 0;
        color: ${({theme}) => theme.colors.text1};
    `

    const ButtonDiv = styled.div`
    `

    const Button = styled.button`
        background: ${({ theme }) => theme.colors.lightred};
        backdrop-filter: blur(8px);
        border-radius: 14px;
        margin: 0 0 16px 16px;
        height: 48px;
        border: none;
        color: ${({ theme }) => theme.colors.red};
        font-family: ${({theme}) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        width: 328px;
        cursor: pointer;
        z-index: 1;
    `


    return (
        <ProductCard>
            <ProductInfo>
                <Image src={product.image} alt={product.alt}></Image>
                <ProductInfo2>
                    <TitlePrice>
                        <Name>{product.name}</Name>
                        <Price>£{product.price}</Price>
                    </TitlePrice>
                    <Desc>{product.desc}</Desc>
                </ProductInfo2>
            </ProductInfo>
            <ButtonDiv>
                <Button onClick={()=>onAdd(product)}>Add to Cart</Button>
            </ButtonDiv>
        </ProductCard>
    )
}