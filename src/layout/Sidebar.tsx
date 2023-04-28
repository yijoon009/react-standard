import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLoginState } from "@/global/loginState";
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
    const { login } = useLoginState();

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
                <li>
                    <Link to="input">input</Link>
                </li>
                <li>
                    <Link to="board">board</Link>
                </li>
                <li>{login.userId}</li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
