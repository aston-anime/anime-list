import {useEffect, useState} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const options: any = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_EHB_ACCESS_KEY,
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    },
};

const useDataFetching = (url: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                setData(json);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log('error', error);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return data;
};

export {useDataFetching};
