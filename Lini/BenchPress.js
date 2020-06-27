import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBenchPress({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBenchPress';

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
    d: "M.5 10a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM19.5 10a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM10 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1c.551 0 1-.449 1-1s-.449-1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 5c-.827 0-1.5.673-1.5 1.5V8h-1.086c-.206-.582-.762-1-1.414-1s-1.208.418-1.414 1H7.914c-.206-.582-.762-1-1.414-1s-1.208.418-1.414 1H4V6.5C4 5.673 3.327 5 2.5 5S1 5.673 1 6.5v4c0 .827.673 1.5 1.5 1.5S4 11.327 4 10.5V9h1.086c.206.582.762 1 1.414 1s1.208-.418 1.414-1h4.172c.206.582.762 1 1.414 1s1.208-.418 1.414-1H16v1.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-4c0-.827-.673-1.5-1.5-1.5zM3 10.5a.5.5 0 01-1 0v-4a.5.5 0 011 0v4zM6.5 9a.5.5 0 11.5-.5.5.5 0 01-.5.5zm7 0a.5.5 0 110-1 .5.5 0 010 1zm4.5 1.5a.5.5 0 01-1 0v-4a.5.5 0 011 0v4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 20h-7c-.827 0-1.5-.673-1.5-1.5v-7a.5.5 0 011 0v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 011 0v7c0 .827-.673 1.5-1.5 1.5zM14.5 6a.5.5 0 01-.5-.5v-4a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4C5 .673 5.673 0 6.5 0h7c.827 0 1.5.673 1.5 1.5v4a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.501 18a.5.5 0 01-.494-.582c.01-.062.26-1.547.701-3.058.669-2.292 1.397-3.36 2.293-3.36s1.624 1.068 2.293 3.36c.441 1.511.69 2.995.701 3.058a.5.5 0 01-.986.164 29.371 29.371 0 00-.676-2.95c-.244-.835-.496-1.494-.748-1.96-.289-.532-.507-.673-.582-.673s-.294.141-.584.676c-.253.467-.505 1.127-.749 1.964a29.226 29.226 0 00-.674 2.942.5.5 0 01-.493.418z"
  })));
}
LiniBenchPress.propTypes = {
  size: PropTypes.number.isRequired
};