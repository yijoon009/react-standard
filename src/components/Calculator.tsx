import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const ButtonContainer = styled.div`
    display: grid;
    width: 40%;
    max-width: 450px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`;

const Button = styled.button`
    background-color: #f2f3f5;
    border: none;
    color: black;
    font-size: 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;

    &:active {
        margin-left: 2px;
        margin-top: 2px;
        box-shadow: none;
    }
`;

const CalButton = styled(Button)`
    font-size: 2rem;
    color: white;
    background-color: #4b89dc;
`;

const ZeroButton = styled(Button)`
    grid-column: 1/3;
`;

const InputBar = styled.input`
    width: 40%;
    max-width: 450px;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #4b89dc;
    text-align: right;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
`;

/**
 * @description 계산기 컴포넌트
 */
function Calculator() {
    // state
    const [inputValue, setInputValue] = useState<string>("0");

    // event
    const onAddNumber = (number: number) => {
        setInputValue((prevState) => prevState + number.toString()); // String(number)도 가능
    };

    const onAddDot = () => {
        setInputValue((prevState) => prevState + ".");
    };

    const onAddPerc = () => {
        setInputValue((prevState) => prevState + "%");
    };

    const onAC = () => {
        setInputValue("0");
    };

    const onDelete = () => {
        setInputValue((prevState) => prevState.slice(0, -1));
    };

    const onAddOper = (operator: string) => {
        setInputValue((prev) => prev + operator);
    };

    const calTotal = () => {
        setInputValue((prev) => Number(prev).toString());
    };

    // view
    return (
        <MainContainer>
            <InputBar value={inputValue} readOnly />
            <ButtonContainer>
                <Button onClick={onAC}>AC</Button>
                <Button onClick={onDelete}>DEL</Button>
                <CalButton onClick={() => onAddOper("%")}>%</CalButton>
                <CalButton onClick={() => onAddOper("/")}>÷</CalButton>
                <Button onClick={() => onAddNumber(7)}>7</Button>
                <Button onClick={() => onAddNumber(8)}>8</Button>
                <Button onClick={() => onAddNumber(9)}>9</Button>
                <CalButton onClick={() => onAddOper("*")}>×</CalButton>
                <Button onClick={() => onAddNumber(4)}>4</Button>
                <Button onClick={() => onAddNumber(5)}>5</Button>
                <Button onClick={() => onAddNumber(6)}>6</Button>
                <CalButton onClick={() => onAddOper("-")}>-</CalButton>
                <Button onClick={() => onAddNumber(1)}>1</Button>
                <Button onClick={() => onAddNumber(2)}>2</Button>
                <Button onClick={() => onAddNumber(3)}>3</Button>
                <CalButton onClick={() => onAddOper("+")}>+</CalButton>
                <ZeroButton onClick={() => onAddNumber(0)}>0</ZeroButton>
                <Button onClick={onAddDot}>.</Button>
                <CalButton onClick={calTotal}>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    );
}

export default Calculator;
