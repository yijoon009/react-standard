import styled from "styled-components";
import { useLoginState } from "@/global/loginState";
const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
`;

/**
 * @description 푸터 컴포넌트
 */
function Footer() {
    const { login } = useLoginState();

    // view
    return (
        <FooterContainer>
            <h2>{login.userId}</h2>
        </FooterContainer>
    );
}

export default Footer;
