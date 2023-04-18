// 파일명이 State인걸로 보아
// 전역 관리 파일인걸 예측
import { atom, useRecoilState, useResetRecoilState } from "recoil";

type LoginInfo = {
    userId: string;
    userPw: string;
};

// 웬만하면 변수명이랑 key값이랑 동일하게 진행
const loginState = atom<LoginInfo>({
    // key는 유일한 id, 구분자로 쓰임
    key: "loginState",
    default: {
        userId: "",
        userPw: "",
    },
});

// 내부적 custom hook
function useLoginState() {
    const [login, setLogin] = useRecoilState(loginState);
    // 로그아웃 기능과 유사
    // 최초 초기값으로 돌아감
    const resetLogin = useResetRecoilState(loginState);

    // return [login, setLogin] 도 가능하지만 이는 사용자가 사용할때 abc 등 임의로 이름을 정할 수 있기 때문에
    // 이름을 강제하는 {} 사용.
    // 또한 배열은 순번이 중요하기 때문에 setLogin만 사용하고 싶어도 [ ,setLogin] 이런식으로 해야해서 불편함
    return {
        login,
        setLogin,
        resetLogin,
    };
}

// loginState에 직접 접근하지 못하게
// useLoginState만 export 함.
export { useLoginState };
