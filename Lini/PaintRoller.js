import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPaintRoller({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPaintRoller';

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
    d: "M17.5 4H17v-.5c0-.827-.673-1.5-1.5-1.5h-14C.673 2 0 2.673 0 3.5v2C0 6.327.673 7 1.5 7h14c.827 0 1.5-.673 1.5-1.5V5h.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-8C8.673 8 8 8.673 8 9.5v1.586c-.582.206-1 .762-1 1.414v5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-5c0-.652-.418-1.208-1-1.414V9.5a.5.5 0 01.5-.5h8c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5zM16 5.5a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h14a.5.5 0 01.5.5v2zm-7 12a.5.5 0 01-1 0v-5a.5.5 0 011 0v5z"
  })));
}
LiniPaintRoller.propTypes = {
  size: PropTypes.number.isRequired
};