function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSpray({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSpray';

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
    d: "M10.95 8.069c-.126-.538-.488-1.024-1.051-1.399-.526-.351-1.187-.574-1.899-.645V5h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H7v1.025c-.711.071-1.372.294-1.899.645-.563.375-.925.862-1.051 1.399A1.503 1.503 0 003 9.5v9c0 .827.673 1.5 1.5 1.5h6c.827 0 1.5-.673 1.5-1.5v-9c0-.67-.442-1.239-1.05-1.431zM7 3h1v1H7V3zm.5 4c1.065 0 1.999.424 2.351 1H5.149c.352-.576 1.286-1 2.351-1zm3 12h-6a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h6a.5.5 0 01.5.5V11H8.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H11v1.5a.5.5 0 01-.5.5zm.5-7v4H9v-4h2zM10.5 4c-.132 0-.261-.053-.353-.147S10 3.631 10 3.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM12.5 3c-.132 0-.261-.053-.353-.147S12 2.631 12 2.5a.5.5 0 11.5.5zM14.5 2c-.132 0-.261-.053-.353-.147S14 1.631 14 1.5a.498.498 0 01.5-.5.5.5 0 010 1zM14.5 4c-.132 0-.261-.053-.353-.147S14 3.631 14 3.5a.498.498 0 01.5-.5.5.5 0 010 1zM12.5 5c-.132 0-.261-.053-.353-.147S12 4.631 12 4.5a.5.5 0 11.5.5zM14.5 6c-.132 0-.261-.053-.353-.147S14 5.631 14 5.5a.498.498 0 01.5-.5.5.5 0 010 1zM16.5 3a.498.498 0 01-.5-.5.5.5 0 11.5.5zM16.5 1c-.132 0-.261-.053-.353-.147S16 .631 16 .5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM16.5 5c-.132 0-.261-.053-.353-.147S16 4.631 16 4.5a.5.5 0 11.5.5zM16.5 7c-.132 0-.261-.053-.353-.147S16 6.631 16 6.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
  })));
}
LiniSpray.propTypes = {
  size: PropTypes.number.isRequired
};