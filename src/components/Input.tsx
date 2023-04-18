import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import { useLoginState } from "@/global/loginState";

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
    // const [inputValue, setInputValue] = useState<string>("");
    // const [loginInfo, setLoginInfo] = useRecoilState(loginState); // useRecoilState에는 atom 변수만 들어가야함
    const { login, setLogin, resetLogin } = useLoginState();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLogin((prevState) => {
            const updateLoginInfo = {
                ...prevState,
                userId: value,
            };

            return updateLoginInfo;
        });
    };

    const onReset = () => {
        resetLogin();
    };

    // watch
    useEffect(() => {
        // init
        console.log(new Date());
    }, []);

    return (
        <Wrap>
            <h1>input: {login.userId}</h1>
            <input value={login.userId} onChange={onChange} />
            <button onClick={onReset}>RESET</button>
        </Wrap>
    );
}

export default Input;
