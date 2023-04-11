import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./components/NotFoundPage";

import Calculator from "@/components/Calculator";
import Counter from "@/components/Counter";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // router에 정의되지 않는 경로로 접근했을때 보여주는 컴포넌트
        errorElement: <NotFoundPage />,
        // 권한처리 용이하게 하기 위함 (root에서 권한처리하고 밑으로 내려가기 편하게)
        children: [
            // children을 사용하기 위해선 Outlet이 필수
            {
                path: "/calculator",
                element: <Calculator />,
                // 여기에 또 children도 추가 가능,,,
                // 여기에 <Outlet/> 적용도 가능
            },
            {
                path: "/counter",
                element: <Counter />,
            },
            {
                path: "/live-clock",
                element: <LiveClock />,
            },
            {
                path: "/to-do-list",
                element: <TodoList />,
            },
        ],
    },

    // 아래는 예시
    // {
    //     path: "/page01",
    //     element: (
    //         <div>
    //             <h1>Hello World</h1>
    //         </div>
    //     ),
    // },
    // {
    //     path: "/page02",
    //     element: (
    //         <div>
    //             <h1>Hello World</h1>
    //         </div>
    //     ),
    // },
]);

export default router;
