import { Table, TableBody, TableHead } from "@/style/Board";
import { useState, useEffect } from "react";
import { getSampleData } from "@/api/board";
import UseAxiosInterceptor from "@/hook/useAxiosInterceptor";
/**
 * @description 게시판
 */
function Board() {
    // useAxiosInterceptor 훅 적용
    UseAxiosInterceptor();

    // state
    const [list, setList] = useState<any[]>([]);

    // method -> useEffect가 자체적인 비동기통신이 불가능하여 만들어준 메서드다.
    const fetchRequest = async () => {
        const result = await getSampleData();

        const { resultList = [] } = result || {};

        setList(resultList);
    };

    // watch
    useEffect(() => {
        // 최초 화면 렌더링 후 한번만 실행되는 영역
        fetchRequest();
    }, []);

    // view
    return (
        <>
            <input />
            <button>검색</button>
            <Table>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <TableHead>
                    <tr>
                        <th>필드01</th>
                        <th>필드02</th>
                        <th>필드03</th>
                        <th>필드04</th>
                        <th>필드05</th>
                        <th>필드06</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {list.map(
                        (
                            {
                                aflNm,
                                assetScaleCcdNm,
                                asymbol,
                                currGrade,
                                gicsLv2Nm,
                            },
                            index
                        ) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{aflNm}</td>
                                <td>{assetScaleCcdNm}</td>
                                <td>{asymbol}</td>
                                <td>{currGrade}</td>
                                <td>{gicsLv2Nm}</td>
                            </tr>
                        )
                    )}
                </TableBody>
            </Table>
        </>
    );
}

export default Board;
