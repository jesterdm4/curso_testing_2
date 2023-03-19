import React, { useState } from 'react'
import styled from 'styled-components';

const SumaryOrder = () => {

    const [isGrayButtonColor, setIsGrayButtonColor] = useState(true);
    const [isDisable, setIsDisable] = useState(true);

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

    return (
        <form data-testid="form-1">
            <h1 data-testid="h1-1">
                Order sumary
            </h1>
            <H2 data-testid="h2-1">
                Scoops $6.00
            </H2>
            <Row data-testid="row-1">
                <input type="radio" data-testid="radio-1"></input>
                <P data-testid="p-1">
                    Vanilla
                </P>
            </Row>
            <H2 data-testid="h2-2">
                Toppings $4.50
            </H2>
            <Row data-testid="row-2">
                <input type="radio" data-testid="radio-2"></input>
                <P data-testid="p-2">
                    M&Ms
                </P>
                <input type="radio" data-testid="radio-3"></input>
                <P data-testid="p-3">
                    Hot fudge
                </P>
                <input type="radio" data-testid="radio-4"></input>
                <P data-testid="p-4">
                    Gummy bears
                </P>
                </Row>
                <H2 data-testid="h2-3">
                    Total:
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
