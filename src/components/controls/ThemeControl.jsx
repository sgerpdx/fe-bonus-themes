import React from 'react';
import { useThemeChange } from '../../state/ThemeProvider';

export default function ThemeControl() {
  const handleThemeChange = useThemeChange();
  return (
    <div>
      <h4>Use the menu below to select a visual theme:</h4>
      <select name="themes" id="themes" onChange={handleThemeChange}>
        <option value="space">Space</option>
        <option value="earth">Earth</option>
        <option value="vulcan">Vulcan</option>
      </select>
    </div>
  );
}
