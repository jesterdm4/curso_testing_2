import React from "react";
import styled from 'styled-components';
import SumaryOrder from "../src/sumary/sumaryOrder/SumaryOrder";

function App() {

  const Wrapper = styled.div`
    display: flex;
    background-color: green;
    margin: 5px;
    padding-left: 5px;
    border: solid 5px yellow;
    color: white;
  `;

  return (
    <Wrapper>
      <SumaryOrder />
    </Wrapper>
  );
}

export default App;
