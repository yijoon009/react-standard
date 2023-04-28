import client from "@/plugin/client";
import { useEffect } from "react";

/**
 * @description 비동기 인터셉터 훅
 */
function useAxiosInterceptor() {
    useEffect(() => {
        //요청
        const requestInterceptor = client.interceptors.request.use(
            (config) => {
                console.log("비동기 요청");

                return config;
            },
            (error) => {
                console.log("비동기 요청 에러");

                Promise.reject(error);
            }
        );

        //응답
        const responseInterceptor = client.interceptors.response.use(
            (config) => {
                console.log("비동기 요청");

                return config;
            },
            (error) => {
                console.log("비동기 요청 에러");

                Promise.reject(error);
            }
        );

        return () => {
            client.interceptors.request.eject(requestInterceptor);
            client.interceptors.response.eject(responseInterceptor);
        };
    }, []);
}

export default useAxiosInterceptor;
