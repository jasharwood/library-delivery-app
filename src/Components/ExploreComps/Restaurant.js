import React from "react";
import styled from "styled-components";
import DeliveryTime from "./DeliveryTime";

export default function Restaurant(props) {
    const {restaurant} = props;


    const RestaurantCard = styled.div`
       width: 370px;
    `

    const Image = styled.img`
        border-radius: 8px;
        margin-bottom: 14px;
    `

    const RestaurantInfo = styled.div`
    `

    const Name = styled.h2`
        font-family: ${({theme}) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: ${({theme}) => theme.colors.text1};
        margin: 0 0 6px 0;
    `

    const Desc = styled.body`
        font-family: BlissLight;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 15px;
        color: ${({theme}) => theme.colors.text2};
    `

    const DeliveryTimeDiv = styled.div`
        height: 36px;
        width: 59px;
        left: 295px;
        top: 16px;
        border-radius: 8px;
        padding: 7px, 9px, 3px, 9px;
        position: absolute;
        background: #FFFFFF;
        box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);
        border-radius: 8px;
    `
    const Div = styled.div`
        position: relative;
    `


    return (
        <RestaurantCard>
            <Div>
                <Image src={restaurant.image} alt={restaurant.alt}></Image>
                <DeliveryTimeDiv>
                    <DeliveryTime min={15} max={20} />
                </DeliveryTimeDiv>
            </Div>
            <RestaurantInfo>
               <Name>{restaurant.name}</Name>
                <Desc>{restaurant.desc}</Desc>
            </RestaurantInfo>
        </RestaurantCard>
    )
}