import styled from "styled-components";

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
    // view
    return (
        <HeaderContainer>
            <h2>{title}</h2>
            <h2>{description}</h2>
        </HeaderContainer>
    );
}

// 유일하게 하나의 컴포넌트만 보낸다는 의미
export default Header;

// export 여러개 보낼때
// export {Header, aaa, bbb}
