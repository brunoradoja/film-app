import React, { useEffect } from 'react'
import { useState } from 'react';
import ShowCard from '../ShowCard';

export default function SearchForm() {
    const [inputValue, setInputValue] = useState('');
    const [searchString, setSearchString] = useState('');
    const [showData, setShowData] = useState([]);

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearchString(inputValue);
        setInputValue('');
    }

    useEffect(() => {
        async function searchAPI() {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
            const data = await response.json();
            const showData = data.map(s => s.show);
            setShowData(showData);
        }
        searchAPI();
    }, [searchString]);


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" required onChange={handleInput} value={inputValue}/>
                <input type="submit" value="Search" />
            </form>
            {showData.map(s => s? <ShowCard key={s.id} show={s} /> : "")}

        </>
      );
}
