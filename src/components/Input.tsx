import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }
    input {
        margin-top: 10px;
        padding: 10px;
    }
`;

/**
 * @description input 컴포넌트
 */
function Input() {
    const [inputValue, setInputValue] = useState<string>("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    };

    // watch
    useEffect(() => {
        // init
        console.log(new Date());
    }, []);

    return (
        <Wrap>
            <h1>input: {inputValue}</h1>
            <input value={inputValue} onChange={onChange} />
        </Wrap>
    );
}

export default Input;
