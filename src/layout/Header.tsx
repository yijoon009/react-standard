import styled from "styled-components";
import { useLoginState } from "@/global/loginState";

type Props = {
    title: string;
    description?: string;
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: lightgreen;
`;

/**
 * @description 헤더 컴포넌트
 * @See https://www.google.com
 */
function Header({ title, description }: Props) {
    // global state
    const { login } = useLoginState();

    // view
    return (
        <HeaderContainer>
            <h2>{login.userId}</h2>
            {/* <h2>{description}</h2> */}
        </HeaderContainer>
    );
}

// 유일하게 하나의 컴포넌트만 보낸다는 의미
export default Header;

// export 여러개 보낼때
// export {Header, aaa, bbb}
