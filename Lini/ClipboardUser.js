function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniClipboardUser({
  size,
  ...props
}) {
  let className = 'Component Lini LiniClipboardUser';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.5 20h-14c-.827 0-1.5-.673-1.5-1.5v-14C1 3.673 1.673 3 2.5 3h1a.5.5 0 010 1h-1a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5h-1a.5.5 0 010-1h1c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.501 5H5.5a.5.5 0 01-.5-.5c0-1.005.453-1.786 1.276-2.197.275-.138.547-.213.764-.254C7.253.885 8.275 0 9.499 0s2.246.885 2.459 2.049c.218.041.489.116.764.254.816.408 1.268 1.178 1.276 2.17l.001.027a.5.5 0 01-.5.5zM6.06 4h6.88a1.21 1.21 0 00-.638-.79c-.389-.203-.8-.21-.805-.21A.498.498 0 0111 2.5c0-.827-.673-1.5-1.5-1.5S8 1.673 8 2.5a.5.5 0 01-.5.5c-.001 0-.413.007-.802.21A1.208 1.208 0 006.06 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 3c-.132 0-.261-.053-.353-.147S9 2.631 9 2.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM12.5 17h-6c-.425 0-.796-.177-1.019-.486s-.273-.717-.139-1.12c.022-.065.229-.649.849-1.232.564-.53 1.596-1.161 3.309-1.161s2.745.631 3.309 1.161c.62.583.827 1.167.849 1.232.134.403.084.811-.139 1.12S12.925 17 12.5 17zm-3-3c-2.609 0-3.204 1.692-3.209 1.709-.031.093-.03.175.002.219s.11.071.208.071h6c.098 0 .176-.027.208-.071s.033-.125.003-.217c-.032-.089-.651-1.712-3.21-1.712zM9.5 12C8.122 12 7 10.878 7 9.5S8.122 7 9.5 7 12 8.122 12 9.5 10.878 12 9.5 12zm0-4C8.673 8 8 8.673 8 9.5S8.673 11 9.5 11s1.5-.673 1.5-1.5S10.327 8 9.5 8z"
  })));
}
LiniClipboardUser.propTypes = {
  size: PropTypes.number.isRequired
};