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

    const toggle = ()=> {
        setIsGrayButtonColor(!isGrayButtonColor);
        setIsDisable(!isDisable);
        console.log("soy otra funcion");
    }; 

    return (
        <form>
            <h1>
                Order sumary
            </h1>
            <H2>
                Scoops $6.00
            </H2>
            <Row>
                <input type="radio"></input>
                <P>
                    3 Vanilla
                </P>
            </Row>
            <H2>
                Toppings $4.50
            </H2>
            <Row>
                <input type="radio"></input>
                <P>
                    M&Ms
                </P>
                <input type="radio"></input>
                <P>
                    Hot fudge
                </P>
                <input type="radio"></input>
                <P>
                    Gummy bears
                </P>
                </Row>
                <H2>
                    Total : 
                </H2>
                <Column>
                    <Row>
                        <input type="checkbox" onClick={toggle}/>
                        <P>I agree to the <a href='www.facebook.com'>terms and conditions</a></P>
                    </Row>
                    <Button isGray={isGrayButtonColor} disabled={isDisable}>Confirm order</Button>
                </Column>

        </form>
    )
}

export default SumaryOrder
