import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPlaylistAdd({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPlaylistAdd';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.5 6A2.503 2.503 0 0114 3.5a.5.5 0 00-1 0v12.399a3.965 3.965 0 00-.448-.26C11.728 15.227 10.645 15 9.5 15s-2.228.227-3.052.639C5.514 16.106 5 16.767 5 17.5s.514 1.395 1.448 1.861c.824.412 1.907.639 3.052.639s2.228-.227 3.052-.639C13.486 18.894 14 18.233 14 17.5V5.947A3.492 3.492 0 0016.5 7C17.878 7 19 8.122 19 9.5a.5.5 0 001 0C20 7.57 18.43 6 16.5 6zm-7 13C7.497 19 6 18.208 6 17.5S7.497 16 9.5 16s3.5.792 3.5 1.5S11.503 19 9.5 19z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 13H.5a.5.5 0 010-1h10a.5.5 0 010 1zM10.5 10H.5a.5.5 0 010-1h10a.5.5 0 010 1zM10.5 0H.5a.5.5 0 000 1H5v4.793L2.854 3.647a.5.5 0 00-.707.707l3 3a.498.498 0 00.708 0l3-3a.5.5 0 00-.707-.707L6.002 5.793V1h4.5a.5.5 0 000-1z"
  })));
}
LiniPlaylistAdd.propTypes = {
  size: PropTypes.number.isRequired
};