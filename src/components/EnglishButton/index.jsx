import React from 'react';

function EnglishButton({ showData, setDisplayData }) {
    function handleFilter() {
        const englishShows = showData.filter(show => show.language === "English");
        setDisplayData(englishShows);
    }

    return (
        <button className="clean-button" onClick={handleFilter}>Filter English Shows</button>
    );
}

export default EnglishButton;
