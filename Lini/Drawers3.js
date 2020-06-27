import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDrawers3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDrawers3';

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
    d: "M15.5 10h-12C2.673 10 2 9.327 2 8.5v-4C2 3.673 2.673 3 3.5 3h12c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-12-6a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 8C8.673 8 8 7.327 8 6.5S8.673 5 9.5 5s1.5.673 1.5 1.5S10.327 8 9.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM15.5 18h-12c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5h12c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-12-6a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16c-.827 0-1.5-.673-1.5-1.5S8.673 13 9.5 13s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM1.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-16z"
  })));
}
LiniDrawers3.propTypes = {
  size: PropTypes.number.isRequired
};