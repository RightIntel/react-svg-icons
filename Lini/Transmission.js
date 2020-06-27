import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTransmission({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTransmission';

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
    d: "M15.5 7a.5.5 0 00-.5.5v2a.5.5 0 01-.5.5H12V7.5a.5.5 0 00-1 0V10H9.95A2.509 2.509 0 008 8.05V7.5a.5.5 0 00-1 0v.55A2.509 2.509 0 005.05 10H4V7.5a.5.5 0 00-1 0v6a.5.5 0 001 0V11h1.05c.199.978.972 1.75 1.95 1.95v.55a.5.5 0 001 0v-.55A2.509 2.509 0 009.95 11H11v2.5a.5.5 0 001 0V11h2.5c.827 0 1.5-.673 1.5-1.5v-2a.5.5 0 00-.5-.5zm-8 5c-.827 0-1.5-.673-1.5-1.5S6.673 9 7.5 9 9 9.673 9 10.5 8.327 12 7.5 12zM4.5 20h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5H4v-1H2.5a.5.5 0 010-1h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H3v1h1.5a.5.5 0 010 1zM8.5 1h-2a.5.5 0 000 1H8v1H6.5a.5.5 0 000 1H8v1H6.359a.5.5 0 000 1H8.5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5zM8.5 15a.5.5 0 00-.5.5V17H7v-1.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5H8v1.5a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zM12.5 6h-2a.5.5 0 010-1H12V4h-1.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2a.5.5 0 010 1H11v1h1.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM12.5 20h-2a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h2a.5.5 0 010 1H11v1h1.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM11 19h1v-1h-1v1zM16.5 6a.498.498 0 01-.353-.146L15 4.708v.793a.5.5 0 01-1 0V3.505 1.502a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-.793l1.146 1.146a.5.5 0 01-.354.853zM15 3h1V2h-1v1zM4.5 5H4V1.5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1H3v3h-.5a.5.5 0 000 1h2a.5.5 0 000-1z"
  })));
}
LiniTransmission.propTypes = {
  size: PropTypes.number.isRequired
};