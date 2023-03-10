import styled from "styled-components";

const ContentsContainer = styled.main`
    height: 100%;
    background-color: #ffffff;
`;

/**
 * @description 콘텐츠 컴포넌트
 */
function Contents() {
    // view
    return (
        <ContentsContainer>
            <h2>Contents</h2>
        </ContentsContainer>
    );
}

export default Contents;
