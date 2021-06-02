import React from 'react';

export default function ThemeControl({ onSelect }) {
  return (
    <div>
      <h4>Use the menu below to select a visual theme:</h4>
      <select name="themes" id="themes" onChange={onSelect}>
        <option value="space">Space</option>
        <option value="earth">Earth</option>
        <option value="vulcan">Vulcan</option>
      </select>
    </div>
  );
}
