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

//LO DE APP TEST

//import { render, screen } from '@testing-library/react';
//import App from './App';

//test('open_to_leearn_how_works_the_thing_of_testing_nested_components', () => {
  //render(<App />);
//});


export default App;
