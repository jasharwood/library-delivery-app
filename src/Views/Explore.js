import React from "react";
import Header from "../Components/ExploreComps/Header";
import PopularRestaurants from '../Components/ExploreComps/PopularRestaurants';
import { InnerContainer } from "../Components/Styles/InnerContainer.styled";
import data from '../data';
import Recommended from '../Components/ExploreComps/Recommended';

function Explore() {

    const {restaurant, recommended} = data;

    return (
        <InnerContainer>
            <Header/>
            <PopularRestaurants restaurant={restaurant}></PopularRestaurants>
            <Recommended recommended={recommended}></Recommended>
        </InnerContainer>
    )
}

export default Explore;