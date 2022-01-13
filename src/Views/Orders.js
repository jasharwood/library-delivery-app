import React from "react";
import OrdersHeader from "../Components/OrdersComps/OrdersHeader";
import { InnerContainer } from "../Components/Styles/InnerContainer.styled";
import data from '../data';
import OrdersList from "../Components/OrdersComps/OrdersList";

function Orders() {

    const {products} = data;

    return (
        <InnerContainer>
            <OrdersHeader/>
            <OrdersList products={products}></OrdersList>
        </InnerContainer>
    )
}

export default Orders;