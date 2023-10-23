import React from 'react';

function RatingButton({ showData, setDisplayData }) {
    function handleSort() {
        const sortedShows = [...showData].sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0));
        setDisplayData(sortedShows);
    }

    return (
        <button className="clean-button" onClick={handleSort}>Sort by Highest Rating</button>
    );
}

export default RatingButton;
