import React, {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {

            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term : searchTerm,
                    location: '410 Doris Drive, Woodstock, GA 30188'
                }
            });

            setResults(response.data.businesses);

    } catch (err) {
        setErrorMessage('Something went wrong');
    }
    };

    useEffect(() => {
        searchApi('Restaurant');
    }, []);

    return [searchApi, results, errorMessage];
};

