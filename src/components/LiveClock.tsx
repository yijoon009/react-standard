import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
        margin-bottom: 15px;
    }
`;

/**
 * @description 실시간 시계
 */
function LiveClock() {
    // state
    const [currentTime, setCurrentTime] = useState<Date>(new Date()); // new Date는 시간까지 포함

    // watch
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(new Date());
        }, 1000); // 1초에 한번씩 첫번째 파라미터 진행

        // clean-up
        // js에는 garbage-collector가 없기때문에 '자원 회수' 해줘야함
        return () => {
            clearTimeout(timer);
        };
    }, [currentTime]);
    // 위 배열에 여러개 들어가서 그중에 하나만 변경되어도 위 함수 로직이 진행됨.
    // 위 배열에는 내부에 있는 값(hook)은 100% 캐치하지만
    // props나 일반 변수는 캐치 못할수도있음.

    // useEffect는 여러개 선언해도 됨.
    useEffect(() => {}, []);

    // view
    return (
        <Wrap>
            <h1>Live Clock</h1>
            <div>{currentTime.toString()}</div>
        </Wrap>
    );
}

export default LiveClock;
