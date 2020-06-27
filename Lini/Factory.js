import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFactory({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFactory';

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
    d: "M18.5 20h-17a1.416 1.416 0 01-1.422-1.535L.924 7.462A.5.5 0 011.423 7H3.5a.5.5 0 01.496.438l.905 7.238 4.342-2.605a.5.5 0 01.758.429v2.117l4.243-2.546a.5.5 0 01.758.429v2.117l4.243-2.546a.5.5 0 01.758.429v6c0 .827-.673 1.5-1.5 1.5zM1.886 8l-.811 10.541c-.01.125.029.241.108.326S1.375 19 1.5 19h17a.5.5 0 00.5-.5v-5.117l-4.243 2.546a.5.5 0 01-.758-.429v-2.117l-4.243 2.546a.5.5 0 01-.758-.429v-2.117l-4.243 2.546a.5.5 0 01-.753-.367L3.057 8H1.884zM2.5 6C1.673 6 1 5.327 1 4.5S1.673 3 2.5 3 4 3.673 4 4.5 3.327 6 2.5 6zm0-2a.5.5 0 100 1 .5.5 0 000-1zM6 4c-1.122 0-2-.659-2-1.5S4.878 1 6 1s2 .659 2 1.5S7.122 4 6 4zm0-2c-.61 0-1 .296-1 .5s.39.5 1 .5 1-.296 1-.5S6.61 2 6 2zM12 4c-1.682 0-3-.878-3-2s1.318-2 3-2 3 .878 3 2-1.318 2-3 2zm0-3c-1.145 0-2 .528-2 1s.855 1 2 1 2-.528 2-1-.855-1-2-1z"
  })));
}
LiniFactory.propTypes = {
  size: PropTypes.number.isRequired
};