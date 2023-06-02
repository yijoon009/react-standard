import { atom, useRecoilState, useResetRecoilState } from "recoil";

type LoginInfo = {
    userId: string;
    userPw: string;
    isLogin?: boolean;
};

const loginState = atom<LoginInfo>({
    key: "loginState",
    default: {
        userId: "",
        userPw: "",
        isLogin: false,
    },
});

// custom hook
function useLoginState() {
    const [login, setLogin] = useRecoilState(loginState);
    const resetLogin = useResetRecoilState(loginState);

    return {
        login,
        setLogin,
        resetLogin,
    };
}

export { useLoginState };
