import React, { useEffect, useState, Component, useRef } from 'react';
import './NGButton.css';
const NGButton = (props) => {
  const [onchangeSearchText, setSearchText] = useState(props.searchText);
  var typingTimer; //timer identifier
  var doneTypingInterval = 2000;

  if (props.Type === 'Primary') {
    return (
      <div>
        <button className="PrimaryButton">
          <span style={{ verticalAlign: 'text-top' }}>{props.Text}</span>
        </button>
      </div>
    );
  } else if (props.Type == 'Secondary') {
    return (
      <div>
        <button className="SecondaryButton">
          <span className="SecondaryButtonText">{props.Text}</span>
        </button>
      </div>
    );
  } else if (props.Type == 'Cancel') {
    return (
      <div>
        <button className="CancelButton">
          <span style={{ verticalAlign: 'text-top' }}>{props.Text}</span>
        </button>
      </div>
    );
  }
};

const SVG = (props) => {
  const { Srcpath, alt } = props;
  let alternateimgstring;
  if (alt) {
    alternateimgstring = alt;
  } else {
    alternateimgstring = 'image';
  }
  return <img src={props.Srcpath} alt={alternateimgstring} />;
};
export default NGButton;
