import axios from "axios";

/**
 * 내가만든 env.development나 production파일 내부의 포트URL을 아래 코드의 axios설정에서 baseURL에 값으로 설정해주면 된다.
 * env파일 안에서 REACT_APP_BASE_URL=http://13.209.192.105:18080/ 이렇게 만들어준것의 key값을 가져와서 -> process.env.REACT_APP_BASE_URL 이렇게 적어주면 된다.
 * 깃헙에 업로드할때는 0.0.0.0으로 수정해서 올려주거나 env(환경변수 파일은) gitignore설정을 해주는게 좋다.
 */
const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export default client;
