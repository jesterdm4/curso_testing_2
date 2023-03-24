import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import OrderEntry from "../../orderEntry/OrderEntry";

    const H2 = styled.h2`
    position: relative;
    bottom: 10px;
    padding-left: 10px;
    `;

    const Row = styled.div`
    position: relative;
    bottom: 30px;
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    gap: 5px;
    `;

    const P = styled.p`
    padding-right: 5px;
    `;

    const Button = styled.button`
    position: relative;
    bottom: 30px;
    background-color: ${(props) => (props.isGray ? 'gray' : 'white')};
    margin-left: 25px;
    `;

    const Column = styled.div`
    position: relative;
    right: 15px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    `;

    const HooverP = styled.p`
    position: absolute;
    left: 350px;
    width: 150px;
    `;

const SumaryOrder = () => {

    const [isGrayButtonColor, setIsGrayButtonColor] = useState(true);
    const [isDisable, setIsDisable] = useState(true);
    const [total, setTotal] = useState(0);
    const [flavor , setFlavor] = useState(0)
    const [topping , setTopping] = useState(0)
    
    const toggle = ()=> {
        setIsGrayButtonColor(!isGrayButtonColor);
        setIsDisable(!isDisable);
        console.log("soy otra funcion");
    }; 

    let [hoover, setHoover] = useState(false);

    function hoovererTrue(e) {
        setHoover(true);
        console.log(hoover);
    };

    function hoovererFalse(e) {
        setHoover(false);
        console.log(hoover);
    };

    const handdleFlavor = num => {
        setFlavor(num);
    };    

    const handdleTopping = num => {
        setTopping(num);
    };    

    useEffect(() => {
        const calcker = () => {
            setTotal(flavor + topping);
        };

        calcker()
    }, [flavor, topping])
    

    return (
        <form data-testid="form-1">
            <h1 data-testid="h1-1">
                Order sumary
            </h1>
            <H2 data-testid="h2-1">
                Scoops
            </H2>
            <Row data-testid="row-1">
                <OrderEntry text="Chocolate $6" price={6} name={"sabor"} onPrice={(price)=> {handdleFlavor(price)}} data-testid="p-1"/>
                <OrderEntry text="Vanilla $3" price={3} name={"sabor"} onPrice={(price)=> {handdleFlavor(price)}} data-testid="p-1.1"/>
                <OrderEntry text="Mint drop $5" price={5} name={"sabor"} onPrice={(price)=> {handdleFlavor(price)}} data-testid="p-1.2"/>
            </Row>
            <H2 data-testid="h2-2">
                Toppings
            </H2>
            <Row data-testid="row-2">
                <OrderEntry text="Gummy bears $0.5" price={4} data-testid="p-2"/>
                <OrderEntry text="Cherries $1" price={4} data-testid="p-2.1"/>
                <OrderEntry text="M&Ms" price={4} data-testid="p-2.2"/>
                <OrderEntry text="Hot fudge" price={4} data-testid="p-2.3"/>
            </Row>
            <H2 data-testid="h2-3">
                Total: {total}
            </H2>
            <Column data-testid="column-1">
                <Row data-testid="row-3">
                    <input type="checkbox" data-testid="checkbox-1" onClick={toggle}/>
                    <P data-testid="p-5">I agree to the <a data-testid="a-1" href='www.facebook.com' onMouseOver={hoovererTrue} onMouseOut={hoovererFalse}>terms and conditions</a></P>
                    {hoover ? (<HooverP>El helado es joda, no te hagas iluciones, equis de</HooverP>) : (null)}
                </Row>
                <Button data-testid="button-1" isGray={isGrayButtonColor} disabled={isDisable}>Confirm order</Button>
            </Column>
        </form>
    )
}

export default SumaryOrder
