function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniParking({
  size,
  ...props
}) {
  let className = 'Component Lini LiniParking';

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
    d: "M5.5 16c-.827 0-1.5-.673-1.5-1.5S4.673 13 5.5 13s1.5.673 1.5 1.5S6.327 16 5.5 16zm0-2a.5.5 0 100 1 .5.5 0 000-1zM14.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.364 12.252a2.493 2.493 0 00-.406-.346c-.13-.794-.553-3.213-1.011-4.129-.483-.966-2.1-1.4-3.372-1.593a.5.5 0 00-.151.988c1.678.255 2.457.711 2.628 1.052.287.575.606 2.096.803 3.183l-.145-.041c-1.268-.336-3.034-.364-5.21-.366a.5.5 0 000 1c2.103.002 3.804.027 4.955.332C16.553 12.623 17 13.106 17 14v2.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V14c0-.308.053-.561.161-.774a.5.5 0 10-.892-.452A2.68 2.68 0 002 14v2.5c0 .652.418 1.208 1 1.414V19c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1h8v1c0 .551.449 1 1 1h1c.551 0 1-.449 1-1v-1.086c.582-.206 1-.762 1-1.414V14c0-.711-.214-1.299-.636-1.748zM5 19H4v-1h1v1zm10 0v-1h1v1h-1zM4.5 10a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5H6c1.103 0 2 .897 2 2s-.897 2-2 2H5v1.5a.5.5 0 01-.5.5zM5 7h1c.551 0 1-.449 1-1s-.449-1-1-1H5v2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 12C2.467 12 0 9.533 0 6.5S2.467 1 5.5 1 11 3.467 11 6.5 8.533 12 5.5 12zm0-10C3.019 2 1 4.019 1 6.5S3.019 11 5.5 11 10 8.981 10 6.5 7.981 2 5.5 2z"
  })));
}
LiniParking.propTypes = {
  size: PropTypes.number.isRequired
};