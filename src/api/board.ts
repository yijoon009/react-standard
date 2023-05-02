import client from "@/plugin/client";

// sample data (비동기통신 : async)
const getSampleData = async () => {
    const url = "/esgResultReport/details?evalYearSeq=1002&type=gradeChange";
    const response = await client.get(url);
    return response.data;
};

export interface Params {
    currentPageNo: number;
    evalYearSeq: number;
    allLv: string;
    scaleLv: string;
    searchType?: string;
    searchWord?: string;
}

const getSampleData2 = async (params: Params) => {
    const {
        currentPageNo,
        evalYearSeq,
        allLv,
        scaleLv,
        searchType,
        searchWord,
    } = params;

    let queryString = `currentPageNo=${currentPageNo}&evalYearSeq=${evalYearSeq}&allLv=${allLv}&scaleLv=${scaleLv}`;

    if (searchType) {
        queryString += `&searchType=${searchType}`;
    }

    if (searchWord) {
        queryString += `&searchWord=${searchWord}`;
    }

    const url = `esgLv/list?${queryString}`;
    const response = await client.get(url);
    return response.data;
};

export { getSampleData, getSampleData2 };
