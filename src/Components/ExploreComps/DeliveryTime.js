import React from "react";
import styled from "styled-components";

function DeliveryTime(props) {
  const { min, max } = props;

  const Time = styled.body`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 10px;
    /* or 77% */
    text-align: center;
    color: #000000;
  `

  const Div = styled.div`
    padding: 8px 4px;
    display: flex;
    flex-direction: column;
  `

  const Mins = styled.body`
    font-family: BlissLight;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 11px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 2px;
  `

  return (
    <Div>
      <Time> {min} - {max}</Time>
      <Mins>mins</Mins>
    </Div>
  );
}

export default DeliveryTime;