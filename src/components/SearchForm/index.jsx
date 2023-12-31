import React, { useEffect } from 'react';
import { useState } from 'react';
import ShowCard from '../ShowCard';
import RatingButton from '../RatingButton';
import EnglishButton from '../EnglishButton';

export default function SearchForm() {
    const [inputValue, setInputValue] = useState('');
    const [searchString, setSearchString] = useState('');
    const [showData, setShowData] = useState([]);
    const [displayShowData, setDisplayShowData] = useState([]);

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
            const fetchedShowData = data.map(s => s.show);
            
            setShowData(fetchedShowData);
            setDisplayShowData(fetchedShowData); // display results immediately after fetching
        }
        if (searchString) { // Only call the API if searchString has a value
            searchAPI();
        }
    }, [searchString]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" required onChange={handleInput} value={inputValue} />
                <input type="submit" value="Search" />
            </form>
            <div className="button-container">
                <RatingButton showData={showData} setDisplayData={setDisplayShowData} />
                <EnglishButton showData={showData} setDisplayData={setDisplayShowData} />
            </div>
            {displayShowData.map(s => <ShowCard key={s.id} show={s} />)}
        </>
    );
}
