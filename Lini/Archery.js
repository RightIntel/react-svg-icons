function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniArchery({
  size,
  ...props
}) {
  let className = 'Component Lini LiniArchery';

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
    d: "M15.671 16.723A9.438 9.438 0 0019 9.499a9.4 9.4 0 00-.988-4.223.5.5 0 00-.895.445A8.413 8.413 0 0118 9.499c0 4.687-3.813 8.5-8.5 8.5S1 14.186 1 9.499s3.813-8.5 8.5-8.5c1.327 0 2.598.297 3.777.883a.5.5 0 00.445-.895 9.413 9.413 0 00-4.223-.988c-2.538 0-4.923.988-6.717 2.782S-.001 6.961-.001 9.498c0 2.538.988 4.923 2.783 6.717.177.177.359.345.547.506l-1.276 2.553a.5.5 0 00.895.447l1.19-2.38c1.567 1.076 3.42 1.656 5.363 1.656s3.796-.58 5.363-1.656l1.19 2.38a.501.501 0 00.895-.447l-1.276-2.553z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15C6.467 15 4 12.533 4 9.5a5.506 5.506 0 017.7-5.042.5.5 0 11-.4.916A4.505 4.505 0 005 9.5C5 11.981 7.019 14 9.5 14S14 11.981 14 9.5c0-.791-.208-1.569-.602-2.25a.5.5 0 01.865-.501A5.506 5.506 0 019.499 15z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 4H15V2.5a.5.5 0 00-1 0v1.768c-.685.585-3.14 2.732-4.89 4.92a.5.5 0 10.781.625c1.705-2.131 4.188-4.295 4.793-4.812h1.817a.5.5 0 000-1zM18.5 3h-2a.5.5 0 01-.5-.5v-2a.5.5 0 011 0V2h1.5a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 12A2.503 2.503 0 017 9.5c0-1.141.771-2.137 1.875-2.421a.5.5 0 11.249.969 1.5 1.5 0 101.875 1.453.5.5 0 011 0c0 1.378-1.122 2.5-2.5 2.5z"
  })));
}
LiniArchery.propTypes = {
  size: PropTypes.number.isRequired
};