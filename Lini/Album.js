import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAlbum({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAlbum';

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
    d: "M16.5 20h-14c-.827 0-1.5-.673-1.5-1.5v-13C1 4.673 1.673 4 2.5 4h14c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5zM2.5 5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-14zM16.5 3h-14a.5.5 0 010-1h14a.5.5 0 010 1zM15.5 1h-12a.5.5 0 010-1h12a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.817 9.113a.501.501 0 00-.415-.104l-5 1a.5.5 0 00-.402.49v2.695a2.569 2.569 0 00-1-.195c-1.122 0-2 .659-2 1.5s.878 1.5 2 1.5 2-.659 2-1.5v-3.59l4-.8v2.085a2.569 2.569 0 00-1-.195c-1.122 0-2 .659-2 1.5s.878 1.5 2 1.5 2-.659 2-1.5v-4a.5.5 0 00-.183-.387zM7 15c-.61 0-1-.296-1-.5s.39-.5 1-.5 1 .296 1 .5-.39.5-1 .5zm5-1c-.61 0-1-.296-1-.5s.39-.5 1-.5 1 .296 1 .5-.39.5-1 .5z"
  })));
}
LiniAlbum.propTypes = {
  size: PropTypes.number.isRequired
};