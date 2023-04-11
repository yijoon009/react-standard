import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;

    li {
        font-size: 1.5em;
        margin-top: 20px;
        padding-left: 20px;
    }
`;

/**
 * @description 사이드바 컴포넌트
 */
function Sidebar() {
    // view
    return (
        <SidebarContainer>
            <h2>Sidebar</h2>
            <ul>
                <li>
                    <Link to="calculator">Calculator</Link>
                </li>
                <li>
                    <Link to="counter">counter</Link>
                </li>
                <li>
                    <Link to="live-clock">live-clock</Link>
                </li>
                <li>
                    <Link to="to-do-list">to-do-list</Link>
                </li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
