import { useState, useEffect } from 'react';

const useApi = (url:string, options?:object) => {
    const [dat, setData] = useState<pop[]>([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { dat, Loading, error };
};

export default useApi;
