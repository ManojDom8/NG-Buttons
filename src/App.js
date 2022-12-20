import React from 'react';
import './style.css';
import NGButton from './NGButton/NGButton.js';
export default function App() {
  return (
    <div>
      <h1>Button variations</h1>
      <p>Primary Button Style :</p>
      <NGButton Text="Primary Button" Type="Primary" />
      <p>Secondary Button Style :</p>
      <NGButton Text="Secondary Button" Type="Secondary" />
      <p>Cancel Button Style :</p>
      <NGButton Text="Cancel" Type="Cancel" />
    </div>
  );
}
