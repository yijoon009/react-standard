import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #479bf5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
`;

const Form = styled.form`
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;

    h3 {
        margin-bottom: 1rem;
    }
    label {
        display: block;
        margin-bottom: 0.5rem;
    }
    .mb-3 {
        margin-bottom: 1rem;
    }
    .form-control {
        display: block;
        width: calc(100% - 3rem); // 여기서 수정
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        margin-bottom: 5px;
    }
    .custom-control {
        position: relative;
        display: block;
        min-height: 1.5rem;
        padding-left: 1.5rem;
    }
    .custom-control-input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-control-label {
        margin-bottom: 0;
        position: relative;
        padding-top: 0.25rem;
    }
    .custom-control-label::before {
        position: absolute;
        top: 0.25rem;
        left: 0;
        display: block;
        width: 1rem;
        height: 1rem;
        pointer-events: none;
        content: "";
        background-color: #fff;
        border: #adb5bd solid 1px;
    }
    .custom-control-input:checked ~ .custom-control-label::before {
        color: #fff;
        border-color: #0d6efd;
        background-color: #0d6efd;
    }
    .d-grid {
        display: grid;
    }
    .btn {
        font-weight: 400;
        color: #212529;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;

        display: block;
        width: calc(100% - 1.4rem); // 여기서 수정
        margin-top: 10px;
    }
    .btn-primary {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
    .forgot-password {
        font-size: 0.875rem;
    }
`;

const Error = styled.span`
    color: red;
`;

type User = {
    userId: string;
    userPw: string;
};

/**
 * @description 로그인 컴포넌트
 */
function Login() {

    const {register, handleSubmit, watch, formState : {errors}} = useForm();

    const onSubmit = (data:any) => {
        console.log(data)
    }

    // view
    return (
        <Wrapper>
            <Container>
                {/* 유효성 검사를 form으로 하면 엔터키 눌러도 필수값 입력 안되면 submit 되는거 막아줄 수 있음 */}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter userId"
                            {...register("userId", { required: true })}
                        />
                        {/* errors.@@@에서 @@@는 register 안에입력한 name이랑 동일해야함 */}
                        {/*{errors.userId && <Error>아이디는 필수입력값입니다.</Error>}*/}
                        {errors.userId && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter userPw"
                            {...register("userPw", { required: true })}
                            required={true}
                        />
                        {errors.userPw && <Error>비밀번호는 필수입력값입니다.</Error>}
                    </div>
                    <div className="d-grid">
                        {/* form 태그 안에있는 button에서 type="submit"이면 엔터누른거랑 동일(onclick이벤트 안걸어줘도 됨) */}
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </Form>
            </Container>
        </Wrapper>
    );
}

export default Login;
