import styled from "styled-components";

import Popup from "@/components/Popup";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";

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
            {/* <Popup content="리액트 스터디 (5회차)" btnTitle="확인" /> */}
            {/* <LiveClock /> */}
            <TodoList />
        </ContentsContainer>
    );
}

export default Contents;
