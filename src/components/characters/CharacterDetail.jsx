import React from 'react';

export default function CharacterDetail({ name, race, image, faction }) {
  return (
    <div>
      <figure>
        <img src={image} height="120" alt={name} />
        <figcaption>
          <p>{name}</p>
          <p>
            {race}, {faction || 'no known affiliation'}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
