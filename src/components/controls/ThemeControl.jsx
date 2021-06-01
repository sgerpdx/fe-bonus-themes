import React from 'react';

export default function ThemeControl({ onSelect }) {
  return (
    <div>
      <h2>Control Console Helm Tactical Display</h2>
      <select name="themes" id="themes" onChange={onSelect}>
        <option value="space">Space</option>
        <option value="earth">Earth</option>
        <option value="vulcan">Vulcan</option>
      </select>
    </div>
  );
}
