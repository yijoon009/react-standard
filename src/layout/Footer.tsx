import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
`;

/**
 * @description 푸터 컴포넌트
 */
function Footer() {
    // view
    return (
        <FooterContainer>
            <h2>Footer</h2>
        </FooterContainer>
    );
}

export default Footer;
