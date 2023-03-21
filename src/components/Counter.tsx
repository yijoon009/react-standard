import styled from "styled-components";
import { useState } from "react";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }
    button {
        margin-right: 5px;
        width: 30px;
        height: 30px;
    }
`;

/**
 * @description 사용자 컴포넌트
 */

function Counter() {
    // state
    const [count, setCount] = useState<number>(0);

    // event
    const onIncrease = () => {
        // 웬만해서 직접 count 접근하지 마
        // setCount(count + 1);

        setCount((prevState) => prevState + 1); //prevStats나 prevValue랑 똑같아
    };

    const onDecrease = () => {
        // setCount(count - 1);
        setCount((prevState) => prevState - 1);
    };

    // view
    return (
        <Wrap>
            <hr />
            <h1>Counter : {count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <hr />
        </Wrap>
    );
}

export default Counter;
