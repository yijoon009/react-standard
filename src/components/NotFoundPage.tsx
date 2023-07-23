import { useNavigate } from "react-router-dom";

/**
 * @description 잘못된 경로로 들어왔을 때 보여주는 컴포넌트
 */
function NotFoundPage() {
    const navigate = useNavigate();
    const onBack = () => {
        navigate(-1);
    };
    return (

        <>
            <h1>잘못된 경로로 접근하였습니다!!!</h1>
            <button onClick={onBack}>back</button>
        </>
    );






}


export default NotFoundPage;


