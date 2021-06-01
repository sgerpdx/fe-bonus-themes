import React from 'react';
import ThemeControl from '../components/controls/ThemeControl';

export default function Header({ onSelect }) {
  return (
    <div>
      <h2>Header</h2>
      <ThemeControl onSelect={onSelect} />
    </div>
  );
}
