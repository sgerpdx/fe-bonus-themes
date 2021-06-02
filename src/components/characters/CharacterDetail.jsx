import React from 'react';

export default function CharacterDetail({ name, race, image, faction, id }) {
  return (
    <div>
      <p>Character Detail</p>
      <figure>
        <img src={image} height="60" alt={name} />
        <figcaption>
          <p>{name}</p>
          <p>
            {race} of {faction}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
