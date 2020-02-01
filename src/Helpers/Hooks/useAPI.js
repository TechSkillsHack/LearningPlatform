import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useAPI(endpoint) {
    const [value, setValue] = useState([]); 

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios
            .get(endpoint)
            .then(res => {
                setValue(res.data);
            });
    }
    return value;
}

export default useAPI
