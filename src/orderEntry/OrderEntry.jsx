import React from 'react'
import styled from 'styled-components';

    const Wrapper = styled.div`
        display: flex;
    `;

const OrderEntry = ({text, onPrice, name, price}) => {

    const handleClick = () => {
        console.log(text);
        onPrice(price);
    };



  return (
    <Wrapper>
        <input type="radio" name={name} onClick={handleClick}/>
        <p>{text}</p>
    </Wrapper>
  )
}

export default OrderEntry
