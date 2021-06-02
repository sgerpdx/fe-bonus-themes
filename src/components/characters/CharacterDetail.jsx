import React from 'react';
import PropTypes from 'prop-types';

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

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  faction: PropTypes.string.isRequired,
};
