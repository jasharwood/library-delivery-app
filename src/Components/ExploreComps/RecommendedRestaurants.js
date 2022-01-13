import React from "react";
import styled from "styled-components";

const RecommendedRestaurants = ({heading,data}) => {

    const RecommendedContainer = styled.div`
        margin-top: 55px;
        width: 100%;
        height: 283px;
    `

    const RecommendedHeading = styled.h2`
        font-family: ${({ theme }) => theme.typography.font1.fontFamily};
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 22px;
        letter-spacing: 0.16em;
        color: ${({ theme }) => theme.colors.text1};
        margin-bottom: 24px;
    `

    const RecommendedWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    `

    const RestaurantCard = styled.div`
       width: 370px;
    `

    const RestaurantImg = styled.img`
        border-radius: 8px;
        margin-bottom: 14px;
    `

    const RestaurantInfo = styled.div`
    `

    const RestaurantTitle = styled.h2`
        font-family: ${({theme}) => theme.typography.font2.fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: ${({theme}) => theme.colors.text1};
        margin: 0 0 6px 0;
    `

    const RestaurantDesc = styled.body`
        font-family: BlissLight;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 15px;
        color: ${({theme}) => theme.colors.text2};
        margin-bottom: 24px;
    `


    return (
        <RecommendedContainer>
            <RecommendedHeading>{heading}</RecommendedHeading>
            <RecommendedWrapper>
                {data.map((restaurant, index) => {
                    return (
                        <RestaurantCard key={index}>
                            <RestaurantImg src={restaurant.img} alt={restaurant.alt} />
                            <RestaurantInfo>
                                <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                                <RestaurantDesc>{restaurant.desc}</RestaurantDesc>
                            </RestaurantInfo>

                        </RestaurantCard>
                    )
                }
                )}
            </RecommendedWrapper>
        </RecommendedContainer>
    )
}

export default RecommendedRestaurants;