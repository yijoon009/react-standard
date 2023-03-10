import styled from "styled-components";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;
`;

/**
 * @description 사이드바 컴포넌트
 */
function Sidebar() {
    // view
    return (
        <SidebarContainer>
            <h2>Sidebar</h2>
        </SidebarContainer>
    );
}

export default Sidebar;
