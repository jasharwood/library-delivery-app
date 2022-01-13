import React from "react";
import styled from "styled-components";

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


    return (
        <RestaurantCard>
            <Image src={restaurant.image} alt={restaurant.alt}></Image>
            <RestaurantInfo>
               <Name>{restaurant.name}</Name>
                <Desc>{restaurant.desc}</Desc>
            </RestaurantInfo>
        </RestaurantCard>
    )
}