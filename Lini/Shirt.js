import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShirt({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShirt';

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
    d: "M13.5 19h-8c-.827 0-1.5-.673-1.5-1.5V8.194l-2.342.781a.5.5 0 01-.632-.316l-1-3a.499.499 0 01.251-.605l6-3A.5.5 0 017 2.501c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5a.5.5 0 01.723-.447l6 3a.5.5 0 01.251.605l-1 3a.499.499 0 01-.632.316L15 8.194V17.5c0 .827-.673 1.5-1.5 1.5zm-9-12a.498.498 0 01.5.5v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-10a.499.499 0 01.658-.475l2.526.842.705-2.114-4.973-2.487c-.351 1.562-1.749 2.733-3.415 2.733S6.436 4.828 6.086 3.266L1.113 5.753l.705 2.114 2.526-.842a.508.508 0 01.158-.026z"
  })));
}
LiniShirt.propTypes = {
  size: PropTypes.number.isRequired
};