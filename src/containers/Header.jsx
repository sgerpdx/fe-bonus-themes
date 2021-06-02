import React from 'react';
import ThemeControl from '../components/controls/ThemeControl';

export default function Header({ onSelect }) {
  return (
    <div>
      <ThemeControl onSelect={onSelect} />
    </div>
  );
}
