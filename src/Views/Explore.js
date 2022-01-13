import React from "react";
import Header from "../Components/Header";
import PopularRestaurants from '../Components/ExploreComps/PopularRestaurants';
import { RestaurantData } from '../Components/ExploreComps/data';
import RecommendedRestaurants from '../Components/ExploreComps/RecommendedRestaurants';
import { RestaurantData2 } from '../Components/ExploreComps/data';
import { InnerContainer } from "../Components/Styles/InnerContainer.styled";

function Explore() {
    return (
        <InnerContainer>
            <Header/>
            <PopularRestaurants heading="POPULAR" data={RestaurantData}></PopularRestaurants>
            <RecommendedRestaurants heading="RECOMMENDED" data={RestaurantData2}></RecommendedRestaurants>
        </InnerContainer>
    )
}

export default Explore;