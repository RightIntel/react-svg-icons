function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniUser({
  size,
  ...props
}) {
  let className = 'Component Lini LiniUser';

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
    d: "M9.5 11C6.467 11 4 8.533 4 5.5S6.467 0 9.5 0 15 2.467 15 5.5 12.533 11 9.5 11zm0-10C7.019 1 5 3.019 5 5.5S7.019 10 9.5 10 14 7.981 14 5.5 11.981 1 9.5 1zM17.5 20h-16C.673 20 0 19.327 0 18.5c0-.068.014-1.685 1.225-3.3.705-.94 1.67-1.687 2.869-2.219C5.558 12.33 7.377 12 9.5 12s3.942.33 5.406.981c1.199.533 2.164 1.279 2.869 2.219C18.986 16.815 19 18.432 19 18.5c0 .827-.673 1.5-1.5 1.5zm-8-7c-3.487 0-6.06.953-7.441 2.756C1.024 17.107 1.001 18.488 1 18.502a.5.5 0 00.5.498h16a.5.5 0 00.5-.5c0-.012-.023-1.393-1.059-2.744C15.559 13.953 12.986 13 9.5 13z"
  })));
}
LiniUser.propTypes = {
  size: PropTypes.number.isRequired
};