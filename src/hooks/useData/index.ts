import { useEffect, useState } from "react";
import productDataArr from './data.json';

interface productData {
    image: {
        thumbnail: string,
        mobile: string,
        tablet: string,
        desktop: string
    },
    name: string,
    category: string,
    price: number
}

async function getData() {
    return new Promise<productData[]>((resolve) => {
        setTimeout(() => {
            resolve(productDataArr)
        }, 3000)
    })
}

function useData() {
    const [data, setData] = useState<productData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const result = await getData();

            setData(result);
        }

        fetchData();
    },[])

    return data;
}

export default useData;