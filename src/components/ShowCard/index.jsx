import React from 'react';

export default function ShowCard({ show }) {
  if (!show.name) return null;

  return (
    <div className="show-card">
      <div>
        <img src={show.image?.medium} alt={show.name} />
      </div>
      <div>
        <div>Rating: {show.rating?.average}/10</div>
        <h2>{show.name}</h2>
        <em>{show.language}, Premiered on {show.premiered}</em>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
    </div>
  );
}
