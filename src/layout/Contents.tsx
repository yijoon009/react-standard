import styled from "styled-components";
import { Outlet } from "react-router-dom";

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
            {/* // 부모 path로부터 children에 명시된 컴포넌트들이
            // Outlet에 렌더링 된다 */}
            <Outlet />
        </ContentsContainer>
    );
}

export default Contents;
